import React from 'react'
import './App.css'
import _ from 'lodash'
import menu from './assets/menu.png'
import {grpc} from 'grpc-web-client'
import {MetadataService} from './proto/metadata_pb_service'
import {PutFileRequest} from './proto/metadata_pb'
import {GetDirectoryKeysRequest} from './proto/metadata_pb'
class App extends React.Component {
  constructor(props) {
    super(props);
    this.getStructure();
    this.state = {
      directory: {},
      root: '',
      selectedMenu: ''
    }
  }

  uploadFile = (file) => {
    let reader = new FileReader();
    let array;
    reader.readAsArrayBuffer(file);
    let react = this;
    reader.onloadend = function (evt) {
      if (evt.target.readyState === FileReader.DONE) {
        let arrayBuffer = evt.target.result;
        array = new Uint8Array(arrayBuffer);
        const putRequest = new PutFileRequest();
        let fileName = react.state.root === '' ? file.name : root + file.name;
        putRequest.setFile(array);
        putRequest.setKey(fileName);
        grpc.unary(MetadataService.PutFile, {
          request: putRequest,
          host: "http://localhost:10671",
          onEnd: res => {
            const { status, message} = res;

            if (status === grpc.Code.OK && message) {
              react.updateStructure(react, fileName);
            }
          }});
      }

    };
  };

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

  updateStructure = (react, file) => {
    let directory = { ...react.state.directory}
    let current = directory
    let path = file.split('/');
    for(let i = 0; i < path.length; i++) {
      if(!_.has(current, path[i])) {
        current[path[i]] = {};
      }
      current = current[path[i]];
    }
    react.setState({directory})
  };

  getStructure = () => {
    const directoryKeys = new GetDirectoryKeysRequest();
    grpc.unary(MetadataService.GetDirectoryKeys, {
      request: directoryKeys,
      host: "http://localhost:10671",
      onEnd: res => {
        const { status, message} = res;

        if (status === grpc.Code.OK && message) {
          this.setState({directory: this.parseStructure(message.toObject().keysList)});
        }
      }
    });
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
    this.uploadFile(file);
  };

  content = () => {
    return (<div>
      <div className="header">
        <div className="title">
          { this.state.root === "" ? '':
            <div onClick={this.goBack}>
              Back
            </div>
          }
          <h1>
            {this.state.root === "" ? "Root": _.last(this.state.root.split('/')) }
          </h1>
          <label>
            Upload
            <input type="file" onChange={(files) => this.handleFiles(files)}/>
          </label>
        </div>
        <div className="subtitle">
          <div className="name">
            Name
          </div>
          <div className="size">
            Size
          </div>
          <div className="modified">
            Last Modified
          </div>
        </div>
      </div>
      <div className="body">
        {this.files()}
      </div>
    </div>);
  };

  folderClick = (obj) => {
    if (this.state.root === "") {
      this.setState({root: obj});
    } else {
      this.setState({root: this.state.root + "/" + obj});
    }
  };

  menu = (e, obj) => {
    e.cancelBubble = true;
    if (e.stopPropagation) e.stopPropagation();
    this.setState({selectedMenu: this.state.selectedMenu === obj ? '': obj })
  };

  files = () => {
    let rootObject = this.state.directory;
    if(this.state.root !== "") {
      this.state.root.split('/').forEach((dir) => {
        rootObject = rootObject[dir];
      })
    }
    return Object.keys(rootObject).filter(obj => obj!=='favourites').map(obj => {
      let isFile = Object.keys(rootObject[obj]).length === 0;
      return <div
          onClick={isFile ? ()=>{} : () =>{this.folderClick(obj)}}
          className={`block ${isFile ? "" : " hover"}`}
          key={obj}
          id={obj}>
        <div className="icon" />
        <div className="name">
          {obj}
        </div>
        <div className="size">
          {isFile ? `0 kb` : ""}
        </div>
        <div className="modified">
          {isFile ? `0` : ""}
        </div>
        <div className="menu">
          <img onClick={(e) => {this.menu(e, obj)}} src={menu} alt="img"/>
          <div className={`popup ${obj === this.state.selectedMenu ? "" : "invisible"}`}>
            {this.popupMenuOptions()}
          </div>
        </div>
        <div className="download">
          TODO DL ICON
        </div>
      </div>
    })
  };

  popupMenuOptions = () => {
    let options = ["rename", "copy", "cut", "delete", "sharing"];
    return options.map((option) => {
      return <div key={option}>
        {option}
      </div>;
    });
  };

  favourites = () => {
    if (!_.has(this.state.directory, "favourites")) {
      this.state.directory.favourites = [];
    }
    return this.state.directory.favourites.map((path) => {
      return (<div key={path} className="block">
        {_.first(path.split('/'))}
      </div>);
    });
  };

  sidebar = () => {
      return (<div>
        <h1>Favourites</h1>
        <div className="separator"/>
        {this.favourites()}
      </div>);
  };

  render() {
    return (<div className="app">
      <div className="sidebar">
        {this.sidebar()}
      </div>
      <div className="content">
        {this.content()}
      </div>
    </div>);
  }

}

export default App;
