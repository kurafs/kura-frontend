import React from 'react'
import './assets/css/NewApp.css'
import './assets/css/bootstrap.css'
import _ from 'lodash'
import { ContextMenu, MenuItem, ContextMenuTrigger } from "react-contextmenu";
import {uploadFile, getDirectoryKeys, deleteFile, getFile} from './FileFunctions'
class NewApp extends React.Component {
  constructor(props) {
    super(props);
    getDirectoryKeys((keysList) => this.setState({directory: this.parseStructure(keysList)}));
    this.state = {
      directory: {},
      root: this.props.match.params['path'] || '',
      selectedMenu: '',
      favourites: []
    }
  }

  parseStructure = (fileList) => {
    let struct = {};
    for(let i = 0; i < fileList.length; i++) {
      let path = fileList[i].split('/');
      let current = struct;
      for (let j = 0; j < path.length; j++) {
        if(path[j] === '') {
          break;
        }
        if(!_.has(current, path[j])) {
          current[path[j]] = {};
        }
        current = current[path[j]];
      }
    }
    return struct;
  };

  updateStructure = (filepath, option) => {
    let directory = { ...this.state.directory};
    let path = filepath.split('/');
    let current = directory;
    switch(option) {
      case "create":
        for (let i = 0; i < path.length; i++) {
          if (!_.has(current, path[i])) {
            current[path[i]] = {};
          }
          current = current[path[i]];
        }
        break;
      case "delete":
        for (let i = 0; i < path.length - 1; i++) {
          current = current[path[i]];
        }

        // TODO handle folder deletion
        delete current[_.last(path)];
    }
    this.setState({directory});
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

  handleFiles = (files) => {
    let file = files.target.files[0];
    uploadFile(file, this.state.root, (fileName) => this.updateStructure(fileName, "create"));
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
    return Object.keys(rootObject).filter(obj => obj!=='favourites').map(obj => {
      let isFile = Object.keys(rootObject[obj]).length === 0;
      return <tr
        onClick={isFile ? ()=>{} : () =>{this.folderClick(obj)}}
        className={`block ${isFile ? "" : " hover"}`}
        key={obj}
        id={obj}>
        <td>
          <ContextMenuTrigger id={obj}>
            {obj}
          </ContextMenuTrigger>
        </td>
        <td>
          <ContextMenuTrigger id={obj}>
            {isFile ? `0 kb` : ""}
          </ContextMenuTrigger>
        </td>
        <td>
          <ContextMenuTrigger id={obj}>
            {isFile ? `0` : ""}
          </ContextMenuTrigger>
        </td>
      </tr>
    })
  };

  menus = () => {
    let rootObject = this.state.directory;
    if(Object.keys(rootObject).length > 0 && this.state.root !== "") {
      this.state.root.split('/').forEach((dir) => {
        rootObject = rootObject[dir];
      })
    }
    return Object.keys(rootObject).filter(obj => obj!=='favourites').map(obj => {
      let options = ["rename", "copy", "cut", "delete", "sharing"];
      return (<ContextMenu id={obj} key={`${obj}-menu`}>
        {options.map((option) => {
          return (
            <MenuItem data={{file: obj}} onClick={this.handleMenuClick}>
              {option}
            </MenuItem>
          );
        })}
      </ContextMenu>);
    });
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

  topbar = () => {
    return (
      <nav className="navbar navbar-inverse navbar-fixed-top">
        <div className="container">
          <div className="navbar-header topbar" href="#">
            <a className="navbar-brand home">
              <img src="/favicon.ico" />
              <div>Kura</div>
            </a>
            <input className="form-control form-control-dark" type="text" placeholder="Search" aria-label="Search" />
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
            <a className="nav-link active" href="#">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-home"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
              Dashboard <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-file"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path><polyline points="13 2 13 9 20 9"></polyline></svg>
              Orders
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-file"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path><polyline points="13 2 13 9 20 9"></polyline></svg>
              Orders
            </a>
          </li>
        </ul>
      </div>
    </nav>);
  };
  handleClick = (e, data) => {
    console.log(data.file);
  };
  render() {
    return (<div>
      {this.topbar()}
      {/*{this.sidebar()}*/}
      {this.filetable()}
      {this.menus()}
    </div>);
  }
}

export default NewApp;