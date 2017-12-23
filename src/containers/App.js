import React from "react";
import ReactDOM from "react-dom";
import { Route, Link, withRouter } from "react-router-dom";
import PrivateRoute from "../presentation/PrivateRoute";
import { connect } from "react-redux";
import axios from "axios";
import jwt from "jsonwebtoken"

import Login from "./Login";
import Dashboard from "./Dashboard";



(function() {
    let token = localStorage.getItem("token");
    if (token) {
        axios.defaults.headers.common['auth-token'] = token;
    } else {
        axios.defaults.headers.common['auth-token'] = null;
        /*if setting null does not remove `Authorization` header then try     
          delete axios.defaults.headers.common['Authorization'];
        */
    }
})();

const App = (props) => {
    let decoded = jwt.decode(props.token, { complete: true });
    let merchantName;
    try {
        merchantName = decoded.payload.name;
    }catch(e) {
        merchantName = null;
    }
    
    return (
            <div>
                <Route exact path="/" render={() => <div><Link to="/login">login</Link></div>} />
                <Route path="/login" component={Login} />                
                <PrivateRoute path="/dashboard" Component={Dashboard} merchantName={merchantName} authed={props.isAuthenticated}/>
            </div>
    );
}

const mapStateToProps = (state) => {
    return {
        isAuthenticated: state.merchant.isAuthenticated,
        token: state.merchant.token
    }
}
export default withRouter(connect(mapStateToProps)(App));


