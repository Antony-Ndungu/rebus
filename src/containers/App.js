import React from "react";
import ReactDOM from "react-dom";
import { Route, Link, withRouter } from "react-router-dom";
import PrivateRoute from "../presentation/PrivateRoute";
import { connect } from "react-redux";
import axios from "axios";


import Login from "./Login";
import SuccessAlert from "../presentation/SuccessAlert";
import asyncComponent from "../AsyncComponent";


const AsyncForgotPassword = asyncComponent(() => import("./ForgotPassword"));
const AsyncDashboard = asyncComponent(() => import("./Dashboard"));

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
                <Route path="/forgot-password" component={AsyncForgotPassword}/>  
                <Route path="/email-sent" component={SuccessAlert} />                  
                <PrivateRoute path="/dashboard" Component={AsyncDashboard}  authed={props.isAuthenticated}/>
            </div>
    );
}

const mapStateToProps = (state) => {
    return {
        isAuthenticated: state.merchant.isAuthenticated,
        token: state.merchant.token,
        passwordResetEmailSent: state.merchant.passwordResetEmailSent
    }
}
export default withRouter(connect(mapStateToProps)(App));


