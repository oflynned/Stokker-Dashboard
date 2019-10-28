import React, { Component } from 'react';
import { fetchAccount } from '../../common/network/api';

import Button from '@material/react-button';
import TextField, { Input } from '@material/react-text-field';

import { Redirect } from 'react-router';
import {
  isSessionValid,
  KEY_ID,
  KEY_NAME,
  KEY_SESSION,
  KEY_SESSION_EXPIRY,
  saveKey
} from '../../common/session/localCache';

import './login.css';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isRedirecting: false,
      email: '',
      password: ''
    };
  }

  componentDidMount() {
    if (isSessionValid()) {
      this.setState({ isRedirecting: true });
    }
  }

  render() {
    if (this.state.isRedirecting) {
      return <Redirect to={'/'}/>;
    }

    return (
      <div className={'login'}>
        <div className={'login-content'}>
          <h1>Login to Stokker</h1>

          <TextField className="field" label="Email">
            <Input
              value={this.state.email}
              onChange={(e) => this.setState({ email: e.currentTarget.value })}/>
          </TextField>

          <TextField className="field" label="Password">
            <Input
              type={'password'}
              value={this.state.password}
              onChange={(e) => this.setState({ password: e.currentTarget.value })}/>
          </TextField>

          <Button raised onClick={() => this.onButtonClick()}>
            Login
          </Button>
        </div>
      </div>
    );
  }

  onButtonClick() {
    fetchAccount(this.state.email, this.state.password)
      .then(({ data: { rawSessionId, session: { expiryTime, user: { _id, name } } } }) => {

        // cache the session returned from the API first
        saveKey(KEY_SESSION, rawSessionId);
        saveKey(KEY_NAME, name);
        saveKey(KEY_SESSION_EXPIRY, expiryTime);
        saveKey(KEY_ID, _id);

        this.setState({ isRedirecting: true });

        // now forcibly redirect the user to the dashboard
        // this.props.setAuthState({ hasVerifiedSession: true });
      })
      .catch(err => console.log(err));
  }
}

export default Login;
