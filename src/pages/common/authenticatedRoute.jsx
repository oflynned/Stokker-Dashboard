import React from 'react';
import { Redirect, Route } from 'react-router-dom';

const AuthenticatedRoute = ({ component: Component, auth, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => {
        if (auth.hasVerifiedSession) {
          return <Component {...props} />;
        }

        return <Redirect to="/login"/>;
      }}
    />
  );
};

export default AuthenticatedRoute;
