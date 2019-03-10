import React from 'react';
import ReactDOM from 'react-dom';
import NewApp from './components/Main';
import { Route, BrowserRouter as Router } from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker';


const routing = (
  <Router>
    <div>
      <Route path="/" component={NewApp} />
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById('root'));

registerServiceWorker();
