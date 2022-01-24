import React from 'react';
import useFirebase from './../Authentification/Authenticate';
import { Route } from 'react-router';
import { Redirect } from 'react-router';
import useAuth from './../Home/Context/UseAuth';
import { Spinner } from 'react-bootstrap';

const PrivateRoute = ({ children, ...rest }) => {
    let {user,loading}=useAuth();
    if(loading){
        return <Spinner animation="border" variant="danger" />
      }
    return (
       
             <Route   {...rest}  render={({ location }) =>  user.email ?children:<Redirect
                  to={{
                  pathname: "/login",
                  state: { from: location } }}/>  }
    />
       
    );
};

export default PrivateRoute;