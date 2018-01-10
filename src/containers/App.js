import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Route, Link, withRouter } from "react-router-dom";
import PrivateRoute from "../presentation/PrivateRoute";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import axios from "axios";
import jwt from "jsonwebtoken"
import { resetPasswordReset, setCustomersNumber, setPaymentsNumber } from "../actions/merchantActions";
import PropTypes from "prop-types";


import Login from "./Login";
import SuccessAlert from "../presentation/SuccessAlert";
import asyncComponent from "../AsyncComponent";

const AsyncForgotPassword = asyncComponent(() => import("./ForgotPassword"));
const AsyncResetPassword = asyncComponent(() => import("./ResetPassword"));
const AsyncDashboard = asyncComponent(() => import("./Dashboard"));
const AsyncSucessAlert = asyncComponent(() => import("../presentation/SuccessAlert"));

class App extends Component {
    componentWillUnmount() {
        this.props.resetPasswordReset();
    }

    componentDidMount() {
        let token;
        (function () {
            token = localStorage.getItem("token");
            if (token) {
                axios.defaults.headers.common['auth-token'] = `Bearer ${token}`;
            } else {
                axios.defaults.headers.common['auth-token'] = null;
                /*if setting null does not remove `Authorization` header then try     
                  delete axios.defaults.headers.common['Authorization'];
                */
            }
        })();        
        
        if ("serviceWorker" in navigator) {
            window.addEventListener("load", () => {
                navigator.serviceWorker.register("./sw.js").then(registration => {
                    console.log("SW registered: ", registration);
                }).catch(registrationError => {
                    console.log("SW registration failed: ", registrationError);
                });
            });
        }  
    }

    render() {
        return (

            <div>
                <Route exact path="/" render={() => <div><Link to="/login">login</Link></div>} />
                <Route path="/login" component={Login} />
                <Route path="/reset-password" component={AsyncResetPassword} />
                <Route path="/forgot-password" render={() => {
                    return this.props.passwordReset.emailSent ? <AsyncSucessAlert subject="Email sent!" message={this.props.passwordReset.message} /> : <AsyncForgotPassword />
                }} />
                <Route path="/email-sent" component={SuccessAlert} />
                <PrivateRoute path="/dashboard" Component={AsyncDashboard} authed={this.props.isAuthenticated} />
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
    return bindActionCreators({ resetPasswordReset,setCustomersNumber, setPaymentsNumber }, dispatch)
}

App.propTypes = {
    resetPasswordReset: PropTypes.func.isRequired,
    setCustomersNumber: PropTypes.func.isRequired,
    setPaymentsNumber: PropTypes.func.isRequired
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));


