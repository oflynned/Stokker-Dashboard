import React, { Component } from 'react';
import LoadingScreen from 'react-loading-screen';
import { getKey, isSessionValid, KEY_SESSION_EXPIRY } from '../../common/session/localCache';
import { fetchApi } from '../../common/network/api';
import { authEndpoint } from '../../common/network/endpoints';
import { Redirect } from 'react-router';

class Checkpoint extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
      hasValidSession: false
    };
  }

  async checkRemoteSessionValidity() {
    try {
      const session = await fetchApi('GET', authEndpoint);
      // TODO recache the expiry time
      this.setState({
        isLoading: false,
        hasValidSession: true
      });
    } catch (err) {
      console.error(err);
      this.setState({
        isLoading: false,
        hasValidSession: false
      });
    }
  }

  componentDidMount() {
    if (isSessionValid()) {
      this.setState({
        isLoading: false,
        hasValidSession: true
      });
    } else {
      this.checkRemoteSessionValidity();
    }
  }

  render() {
    if (this.state.isLoading) {
      return <LoadingScreen
        loading={this.state.isLoading}
        bgColor="#FBF5F3"
        spinnerColor="#EA0232"
        textColor="#EA0232"
        logoSrc={require('../../assets/reactLogo.png')}/>;
    }

    return this.state.hasValidSession ?
      <Redirect to={'/dashboard'}/> :
      <Redirect to='/login'/>;
  }
}

export default Checkpoint;
