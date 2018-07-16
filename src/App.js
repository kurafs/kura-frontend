import React from 'react'
import './App.css'
import _ from 'lodash'
import menu from './assets/menu.png'
import $ from 'jquery'
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      directory: this.getStructure(),
      root: '',
      selectedMenu: ''
    }
  }

  getStructure = () => {
    return {
      "folder1": {
        "file1": {
          "metadata": {
            "size": 100,
            "modified": "January 31 2019"
          }
        },
        "file2": {
          "metadata": {
            "size": 1024,
            "modified": "January 31 2019"
          }
        },
        "more": {
          "file3": {
            "metadata": {
              "size": 37899,
              "modified": "January 31 2019"
            }
          }
        }
      },
      "folder2": {
        "stuff": {
          "file": {
            "metadata": {
              "size": 100,
              "modified": "January 31 2019"
            }
          }
        }
      },
      "cool file": {
        "metadata": {
          "size": 999,
          "modified": "January 31 2019"
        }
      },
      "cool file2": {
        "metadata": {
          "size": 50,
          "modified": "January 31 2019"
        }
      },
      "cool file3": {
        "metadata": {
          "size": 50,
          "modified": "January 31 2019"
        }
      },
      "cool file4": {
        "metadata": {
          "size": 50,
          "modified": "January 31 2019"
        }
      },
      "cool file5": {
        "metadata": {
          "size": 50,
          "modified": "January 31 2019"
        }
      },
      "cool file6": {
        "metadata": {
          "size": 50,
          "modified": "January 31 2019"
        }
      },
      "cool file7": {
        "metadata": {
          "size": 50,
          "modified": "January 31 2019"
        }
      },
      "favourites": [
        "folder1/more",
        "folder2/stuff"
      ]
    }
  };

  goBack = () => {
    if ((this.state.root.match(/\//g) || []).length === 0) {
      this.setState({root: ''});
    } else {
      this.setState({root: this.state.root.substring(0, this.state.root.lastIndexOf('/'))})
    }
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
            {console.log(this.state.root)}
            {this.state.root === "" ? "Root": _.last(this.state.root.split('/')) }
          </h1>
          <div>
            Upload
            <img src="" />
          </div>
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
    this.setState({selectedMenu: obj})
  };

  files = () => {
    let rootObject = this.state.directory;
    if(this.state.root !== "") {
      this.state.root.split('/').forEach((dir) => {
        rootObject = rootObject[dir];
      })
    }
    return Object.keys(rootObject).filter(obj => obj!=='favourites').map(obj => {
      let isFile = 'metadata' in rootObject[obj];
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
          {isFile ? `${rootObject[obj].metadata.size} kb` : ""}
        </div>
        <div className="modified">
          {isFile ? `${rootObject[obj].metadata.modified}` : ""}
        </div>
        <div className="menu">
          <img onClick={(e) => {this.menu(e, obj)}} src={menu} />
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
      return <div>
        {option}
      </div>;
    });
  };

  favourites = () => {
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
