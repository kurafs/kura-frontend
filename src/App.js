import React from 'react'
import './App.css'
import _ from 'lodash'
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      directory: this.getStructure(),
      root: ''
    }
  }

  getStructure = () => {
    return {
      "folder1": {
        "file1": {
          "metadata": {
            "size": 100
          }
        },
        "file2": {
          "metadata": {
            "size": 1024
          }
        },
        "more": {
          "file3": {
            "metadata": {
              "size": 37899
            }
          }
        }
      },
      "folder2": {
        "stuff": {
          "file": {
            "metadata": {
              "size": 100
            }
          }
        }
      },
      "cool file": {
        "metadata": {
          "size": 50
        }
      },
      "cool file2": {
        "metadata": {
          "size": 50
        }
      },
      "cool file3": {
        "metadata": {
          "size": 50
        }
      },
      "cool file4": {
        "metadata": {
          "size": 50
        }
      },
      "cool file5": {
        "metadata": {
          "size": 50
        }
      },
      "favourites": [
        "folder1/more",
        "folder2/stuff"
      ]
    }
  };

  content = () => {
    return (<div>
      <div className="header">
        <div className="title">
          <h1>
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

  folderClick = (e) => {
    console.log(e);
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
      return <div onClick={isFile ? ()=>{} : this.folderClick} className="block" key={obj}>
        <div className="icon" />
        <div className="name">
          {obj}
        </div>
        <div className="size">
          {isFile ? `${rootObject[obj].metadata.size} kb` : "???"}
        </div>
        <div className="menu">
          TODO MENU
        </div>
        <div className="download">
          TODO DL ICON
        </div>
      </div>
    })
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
