import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ Component, authed, location, path, merchantName }) => {
    
    return (
        <Route path={path} render={() => {
            return authed === true ? <Component merchantName={merchantName}/> : <Redirect to={{pathname: '/login'}}/> 
        }} />
    );
}

export default PrivateRoute;