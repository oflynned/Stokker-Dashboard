import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from './pages/userIdentity/login';
import StockLevels from './pages/dashboard/stockLevels';
import AuthenticatedRoute from './pages/common/authenticatedRoute';

import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route exact path={['/', '/login']} component={Login}/>
            <AuthenticatedRoute exact path={'/stock'} component={StockLevels}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
