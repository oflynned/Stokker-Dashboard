import React, { Component } from 'react';
import { Redirect, withRouter } from 'react-router-dom';

import './stockLevels.css';

class StockLevels extends Component {
  render() {
    return (
      <div>Stock levels</div>
    );
  }
}

export default withRouter(StockLevels);
