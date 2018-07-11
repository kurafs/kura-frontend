import React from 'react'
import './Login.css'
import login from './LoginManager'
import App from './App'
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      key: ''
    }
  }

  onInput = (e) => {
    switch(e.target.id) {
      case '0':
        this.setState({username: e.target.value})
        break;
      case '1':
        this.setState({password: e.target.value})
        break;
      default:
        break;
    }
  };

  onKeyPress = (e) => {
    if (e.keyCode === 13) {
      this.onSubmit();
    }
  };

  onSubmit = () => {
    login(this.state.username, this.state.password, (resp) => {this.setState({key: resp.key})});
  };
  render() {
    // if (this.state.key) {
      return <App key={this.state.key} />
    // } else {
    //   return (
    //     <div className="Login">
    //       <header>
    //         Welcome to KuraFS
    //       </header>
    //       <p>
    //         Please log in to continue:
    //       </p>
    //       <div>
    //         <div>
    //           username: <input id="0" onChange={this.onInput}/>
    //         </div>
    //         <div className="pass">
    //           password: <input type="password" id="1" onChange={this.onInput} onKeyDown={this.onKeyPress}/>
    //         </div>
    //         <button onClick={this.onSubmit}>Login</button>
    //       </div>
    //     </div>
    //   );
    // }
  }
}

export default Login;
