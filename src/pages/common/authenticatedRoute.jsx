import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { isSessionValid } from '../../common/session/localCache';

const AuthenticatedRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => {
        if (isSessionValid()) {
          return <Component {...props} />;
        }

        return <Redirect to="/login"/>;
      }}
    />
  );
};

export default AuthenticatedRoute;
