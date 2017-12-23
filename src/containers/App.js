import React from "react";
import ReactDOM from "react-dom";
import { Route, Link, withRouter } from "react-router-dom";
import PrivateRoute from "../presentation/PrivateRoute";
import { connect } from "react-redux";
import axios from "axios";

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
    return (
            <div>
                <Route exact path="/" render={() => <div><Link to="/login">login</Link></div>} />
                <Route path="/login" component={Login} />                
                <PrivateRoute path="/dashboard" Component={Dashboard} authed={props.isAuthenticated}/>
            </div>
    );
}

const mapStateToProps = (state) => {
    return {
        isAuthenticated: state.merchant.isAuthenticated
    }
}
export default withRouter(connect(mapStateToProps)(App));


