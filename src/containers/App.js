import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Route, Link, withRouter } from "react-router-dom";
import PrivateRoute from "../presentation/PrivateRoute";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import axios from "axios";
import { resetPasswordReset } from "../actions/merchantActions";


import Login from "./Login";
import SuccessAlert from "../presentation/SuccessAlert";
import asyncComponent from "../AsyncComponent";


const AsyncForgotPassword = asyncComponent(() => import("./ForgotPassword"));
const AsyncResetPassword = asyncComponent(() => import("./ResetPassword"));
const AsyncDashboard = asyncComponent(() => import("./Dashboard"));
const AsyncSucessAlert = asyncComponent(() => import("../presentation/SuccessAlert"));

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

class App extends Component {
    componentWillUnmount(){
        this.props.resetPasswordReset();
    }

    render(){
        return (
            
            <div>
                <Route exact path="/" render={() => <div><Link to="/login">login</Link></div>} />
                <Route path="/login" component={Login} />   
                <Route path="/reset-password" component={AsyncResetPassword}/> 
                <Route path="/forgot-password" render={() => {
                    return this.props.passwordReset.emailSent ? <AsyncSucessAlert subject="Email sent!" message={this.props.passwordReset.message}/>: <AsyncForgotPassword/>
                }}/>  
                <Route path="/email-sent" component={SuccessAlert} />                  
                <PrivateRoute path="/dashboard" Component={AsyncDashboard}  authed={this.props.isAuthenticated}/>
            </div>
    );
    }

}



const mapStateToProps = (state) => {
    return {
        isAuthenticated: state.merchant.isAuthenticated,
        token: state.merchant.token,
        passwordReset: state.merchant.passwordReset
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({resetPasswordReset}, dispatch)
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));


