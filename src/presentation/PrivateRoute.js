import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ Component, authed, location, path }) => {
    
    return (
        <Route path={path} render={() => {
            return authed === true ? <Component /> : <Redirect to={{pathname: '/login'}}/> 
        }} />
    );
}

export default PrivateRoute;