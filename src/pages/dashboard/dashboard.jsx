import React, { Component } from 'react';
import { Redirect, withRouter } from 'react-router-dom';

import './dashboard.css';

class Dashboard extends Component {
  render() {
    return (
      <div>Stock levels</div>
    );
  }
}

export default withRouter(Dashboard);
