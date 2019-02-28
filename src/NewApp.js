import React from 'react'
import './assets/css/NewApp.css'
import './assets/css/bootstrap.css'
import Modal from 'react-modal';
import _ from 'lodash'
import moment from 'moment'
import { ContextMenu, MenuItem, ContextMenuTrigger } from "react-contextmenu";
import {uploadFile, getDirectoryKeys, deleteFile, getFile, getMetadata} from './FileFunctions'
const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

class NewApp extends React.Component {
  constructor(props) {
    super(props);
    getDirectoryKeys(
      (keysList) => this.setState({directory: this.parseStructure(keysList)})
      );
    this.state = {
      directory: {},
      root: this.props.match.params['path'] || '',
      favourites: [],
      sortOrder: 'name',
      progress: 0,
      cutFile: '',
      selected: '',
      modalIsOpen: false
    };
    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  setDirectory = (filepath, obj) => {
    let newDirectory = Object.assign({}, this.state.directory);
    let filename = _.last(filepath.split('/'));
    if (!filepath.includes('/')) {
      newDirectory[filename] = obj
    } else {
      let path = filepath.replace(`/${filename}`, `["${filename}"]`).replace(/\//g,'.');
      _.set(newDirectory, path, obj);
    }
    this.setState({directory: newDirectory});
  };

  unsetDirectory = (filepath) => {
    let newDirectory = Object.assign({}, this.state.directory);
    let filename = _.last(filepath.split('/'));
    if (!filepath.includes('/')) {
      delete newDirectory[filename];
    } else {
      let path = filepath.replace(`/${filename}`, `["${filename}"]`).replace(/\//g,'.');
      _.unset(newDirectory, path);
    }
    this.setState({directory: newDirectory});
  };

  parseStructure = (fileList) => {
    let struct = {};
    for(let file of fileList) {
      let path = file.split('/');
      let current = struct;
      for (let key of path) {
        if(key === '') {
          break;
        }
        if(!_.has(current, key)) {
          current[key] = {};
        }
        current = current[key];
      }
    }

    for(let file of fileList) {
      getMetadata(file, (obj) => {
        this.setDirectory(file, {
              lastModified: obj.metadata.lastModified.seconds,
              size: obj.metadata.size
          }
        )
      });
    }
    return struct;
  };

  updateStructure = (filepath, option) => {
    switch(option) {
      case "create":
        this.setDirectory(filepath, {lastModified: 0, size: 0});
        getMetadata(filepath, (obj) => {
          this.setDirectory(filepath, {
            lastModified: obj.metadata.lastModified.seconds,
            size: obj.metadata.size
          })
        });
        break;
      case "delete":
        this.unsetDirectory(filepath);
        break;
      default:
        // do nothing
    }
  };

  folderClick = (obj) => {
    if (this.state.root === "") {
      this.setState({root: obj});
    } else {
      this.setState({root: this.state.root + "/" + obj});
    }
  };

  goBack = () => {
    if ((this.state.root.match(/\//g) || []).length === 0) {
      this.setState({root: ''});
    } else {
      this.setState({root: this.state.root.substring(0, this.state.root.lastIndexOf('/'))})
    }
  };

  downloadFile = (fileName) => {
    let filepath = this.state.root === '' ? fileName : `${this.state.root}/${fileName}`;
    getFile(filepath, (bytes) => {
      let blob = new Blob([bytes]);
      let link = document.createElement('a');
      link.href = window.URL.createObjectURL(blob);
      link.download = fileName;
      link.click();
    });
  };

  handleFiles = (files) => {
    let file = files.target.files[0];
    let path = this.state.root === '' ? file.name : `${this.state.root}/${file.name}`;
    uploadFile(file, path,
      (fileName) => this.updateStructure(fileName, "create"),
      (data) => {
        console.log(data.loaded);
        if(data.lengthComputable) {
          this.setState({progress: data.loaded * 100 / data.total});
        }
      }
    );
  };

  filetable = () => {
    return (
      <main role="main" className="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Size</th>
              <th scope="col">Last Modifed</th>
              <th scope="col"/>
            </tr>
          </thead>
          <tbody>
            {this.files()}
          </tbody>
        </table>
      </main>);
  };
  files = () => {
    let rootObject = this.state.directory;
    if (Object.keys(rootObject).length > 0 && this.state.root !== "") {
      this.state.root.split('/').forEach((dir) => {
        rootObject = rootObject[dir];
      })
    }
    return Object.keys(rootObject)
      .filter(obj => obj!=='favourites')
      .sort((key1, key2) => this.sortOrder(rootObject, key1, key2))
      .map(obj => {
        const isFile = rootObject[obj].hasOwnProperty('size');
        const selected = this.state.selected === obj;
        return <tr
          onClick={isFile ? ()=>{} : () =>{this.folderClick(obj)}}
          className={`block ${isFile ? "" : " folder"} ${selected ? 'selected' : ''}`}
          key={obj}
          id={obj}>
          <td>
            <ContextMenuTrigger id={obj}>
              {obj}
            </ContextMenuTrigger>
          </td>
          <td>
            <ContextMenuTrigger id={obj}>
              {isFile ? this.formatFileSize(rootObject[obj].size) : ""}
            </ContextMenuTrigger>
          </td>
          <td>
            <ContextMenuTrigger id={obj}>
              {isFile ? this.formatDate(rootObject[obj].lastModified) : ""}
            </ContextMenuTrigger>
          </td>
        </tr>
      });
  };

  formatFileSize = (size) => {
    if (size < 1000) {
      return `${size} B`;
    }

    if (size < 1000000) {
      return `${Math.floor(size/1000)} KB`;
    }

    if (size < 1000000000) {
      return `${Math.floor(size/1000000)} MB`;
    }

    return `${Math.floor(size/1000000000)} GB`;
  };

  formatDate = (time) => {
    return moment.unix(time).format('MMM Do YYYY, LT');
  };

  sortOrder = (structure, key1, key2) => {
    return key1 >= key2 ? -1: 1;
  };

  handleMenuClick = (e, config) => {
    const filePath = this.state.root === '' ? config.file : `${this.state.root}/${config.file}`;
    switch(config.option) {
      case "Delete":
        deleteFile(filePath, (file) => this.updateStructure(file, 'delete'));
        break;
      case 'Download':
        this.downloadFile(config.file);
        break;
      case 'Cut':
        this.setState({cutFile: filePath});
        break;
      case 'Paste':
        this.setState({copiedFile: ''});
        break;
      case 'Rename':
        this.setState({modalIsOpen: true});
        break;
      default:
        window.alert('not implemented!');
    }
  };

  showMenu = (obj) => {
    this.setState({selected: obj});
  };

  menus = () => {
    let rootObject = this.state.directory;
    if(Object.keys(rootObject).length > 0 && this.state.root !== "") {
      this.state.root.split('/').forEach((dir) => {
        rootObject = rootObject[dir];
      })
    }
    return Object.keys(rootObject).filter(obj => obj!=='favourites' && rootObject[obj].hasOwnProperty('size')).map(obj => {
      let options = ["Download", "Delete", "Rename"];
      return (<ContextMenu id={obj} key={`${obj}-menu` } onShow={() => this.showMenu(obj)} onHide={() => this.showMenu('')}>
        {options.map((option) => {
          return (
            <MenuItem key={option} className="dropdown-menu" data={{file: obj, option}} onClick={this.handleMenuClick}>
              {option}
            </MenuItem>
          );
        })}
      </ContextMenu>);
    });
  };

  topbar = () => {
    return (
      <nav className="navbar navbar-inverse navbar-fixed-top">
        <div className="container">
          <div className="navbar-header topbar" href="#">
            <a className="navbar-brand home">
              <img src="/favicon.ico" alt="Kura"/>
              <div>Kura</div>
            </a>
            <input className="form-control form-control-dark" type="text" placeholder="Search" aria-label="Search" />
            <button className="navbar-btn" onClick={this.goBack}>Back</button>
            <input type="file" id="files" className="hidden" onChange={(files) => this.handleFiles(files)}/>
            <label htmlFor="files">Upload</label>
            {/*<div className="test">{this.state.progress}</div>*/}
          </div>
        </div>
      </nav>
    );
  };
  
  sidebar = () => {
    return (
    <nav className="col-md-2 d-none d-md-block bg-light sidebar">
      <div className="sidebar-sticky">
        <ul className="nav flex-column">
          <li className="nav-item">
            <a className="nav-link active" href="">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-home"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
              Dashboard <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-file"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path><polyline points="13 2 13 9 20 9"></polyline></svg>
              Orders
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-file"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path><polyline points="13 2 13 9 20 9"></polyline></svg>
              Orders
            </a>
          </li>
        </ul>
      </div>
    </nav>);
  };

  openModal() {
    this.setState({modalIsOpen: true});
  }

  afterOpenModal() {

  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  modal = () => {
    return (<Modal
      isOpen={this.state.modalIsOpen}
      onAfterOpen={this.afterOpenModal}
      onRequestClose={this.closeModal}
      style={customStyles}
      contentLabel="Rename Modal"
    >

      <h2 ref={subtitle => this.subtitle = subtitle}>Rename</h2>
      <br />
      <form onSubmit={(e)=>{e.preventDefault(); console.log('test')}}>
        <input id="filename"/>
        {"    "}
        <input type="submit"/>
      </form>
    </Modal>);
  };

  render() {
    return (<div>
      {this.topbar()}
      {/*{this.sidebar()}*/}
      {this.filetable()}
      {this.menus()}
      {this.modal()}
    </div>);
  }
}

export default NewApp;