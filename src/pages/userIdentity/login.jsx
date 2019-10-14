import React, { Component } from 'react';

import { KEY_ID, KEY_NAME, KEY_SESSION, saveKey } from '../../common/session/localCache';
import { fetchNewAccount } from '../../common/network/api';

import './login.css';
import { Redirect } from 'react-router';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isRedirecting: false
    };
  }

  render() {
    if (this.state.isRedirecting) {
      return <Redirect to={'/'}/>;
    }

    return (
      <div className={'login'}>
        <div className={'click-me'} onClick={() => this.onButtonClick()}>
          Click me
        </div>
      </div>
    );
  }

  onButtonClick() {
    fetchNewAccount({ name: 'Ed' }, 'oflynned@gmail.com', 'password1')
      .then(({ data: { session, user: { _id, name } } }) => {
        // cache the session returned from the API first
        saveKey(KEY_SESSION, session);
        saveKey(KEY_ID, _id);
        saveKey(KEY_NAME, name);

        // now forcibly redirect the user to the dashboard
        this.props.setAuthState({ hasVerifiedSession: true });
      })
      .catch(err => console.log(err));
  }
}

export default Login;
