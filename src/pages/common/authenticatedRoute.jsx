import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { isSessionValid } from '../../common/session/localCache';

const AuthenticatedRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => {
        try {
          isSessionValid();
          return <Component {...props} />;
        } catch (err) {
          return <Redirect to="/login"/>;
        }
      }}
    />
  );
};

export default AuthenticatedRoute;
