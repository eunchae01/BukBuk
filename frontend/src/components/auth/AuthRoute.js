import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import swal from 'sweetalert';


function AuthRoute({ authenticated, component: Component, render, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
        authenticated ? (
          render ? render(props) : <Component {...props} />
        ) : (
          swal("이동 실패 !","Need to Login" , "warning", {
            buttons: false,
            timer: 2000,
          }),
          <Redirect
            to={{ pathname: '/login', state: { from: props.location } }}
          />
          
        )
      }
    />
  );
}

export default AuthRoute;