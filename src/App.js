import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ApolloProvider } from 'react-apollo';

import apolloClient from './common/network/apolloClient';

import '@material/button/dist/mdc.button.css';
import '@material/textfield/dist/mdc.textfield.css';
import '@material/floating-label/dist/mdc.floating-label.css';
import '@material/notched-outline/dist/mdc.notched-outline.css';
import '@material/line-ripple/dist/mdc.line-ripple.css';
import '@material/top-app-bar/dist/mdc.top-app-bar.css';
import '@material/checkbox/dist/mdc.checkbox.css';
import '@material/form-field/dist/mdc.form-field.css';
import '@material/icon-button/dist/mdc.icon-button.css';
import '@rmwc/data-table/data-table.css';

import Login from './pages/userIdentity/login';
import Dashboard from './pages/dashboard/dashboard';
import AuthenticatedRoute from './pages/common/authenticatedRoute';
import Checkpoint from './pages/userIdentity/checkpoint';

import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route exact path={'/'} component={Checkpoint}/>
            <Route exact path={'/login'} component={Login}/>
            <ApolloProvider client={apolloClient}>
              <AuthenticatedRoute exact path={'/dashboard'} component={Dashboard}/>
            </ApolloProvider>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
