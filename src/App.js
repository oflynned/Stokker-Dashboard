import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import '@material/react-button/dist/button.css';
import '@material/react-text-field/dist/text-field.css';

import Login from './pages/userIdentity/login';
import Dashboard from './pages/dashboard/dashboard';
import AuthenticatedRoute from './pages/common/authenticatedRoute';

import './App.css';
import Checkpoint from './pages/userIdentity/checkpoint';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route exact path={'/'} component={Checkpoint}/>
            <Route exact path={'/login'} component={Login}/>
            <AuthenticatedRoute exact path={'/dashboard'} component={Dashboard}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
