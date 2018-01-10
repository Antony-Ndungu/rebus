import React, { Component } from "react";
import FormControl from "../presentation/FormControl";
import Button from "../presentation/Button";
import { validateLoginInput } from "../../shared/validation";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { merchantLogin } from "../actions/merchantActions";
import { Redirect, Link } from "react-router-dom";
import axios from "axios";


class Login extends Component {

    state = {
        businessShortcode: '',
        password: '',
        errors: {},
        isLoading: false
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.setState({
            isLoading: true
        });

        let errors = validateLoginInput(this.state);


        if (Object.keys(errors).length) {
            this.setState({
                errors,
                isLoading: false
            });
        } else {
            this.setState({
                errors
            });
            this.props.merchantLogin({
                businessShortcode: this.state.businessShortcode,
                password: this.state.password
            }).then(({ errors }) => {
                if (Object.keys(errors).length) {
                    this.setState({
                        errors,
                        businessShortcode: "",
                        password: "",
                        isLoading: false
                    });
                }
            });
        }
    }

    render() {


        if (this.props.isAuthenticated) {
            (function () {
                let token = localStorage.getItem("token");
                if (token) {
                    axios.defaults.headers.common['auth-token'] = `Bearer ${token}`;
                } else {
                    axios.defaults.headers.common['auth-token'] = null;
                    /*if setting null does not remove `Authorization` header then try     
                      delete axios.defaults.headers.common['Authorization'];
                    */
                }
            })(); 
            return <Redirect to="/dashboard" />;
        }

        return (
            <div style={{"paddingTop": "10vh"}}>
                <div style={{ "maxWidth": "400px", margin: "auto" }}>
                    <h1 className="w3-text-teal w3-center" style={{ textShadow: "1px 1px 0 #444" }}>
                        <b>Rebus</b>
                    </h1>
                    <div className="w3-card">
                        <div className="w3-container primary-color w3-text-white">
                            <h2>Login</h2>
                        </div>
                        {this.state.errors.global && <div className="w3-panel w3-margin w3-red"><p>{this.state.errors.global}</p></div>}
                        <form className="w3-container" onSubmit={this.onSubmit}>
                            <FormControl error={this.state.errors.businessShortcode} label="Business Shortcode" name="businessShortcode" type="text" value={this.state.businessShortcode} onChange={this.onChange} />
                            {this.state.errors.businessShortcode && <span className="w3-text-red">{this.state.errors.businessShortcode}</span>}
                            <FormControl error={this.state.errors.password} label="Password" name="password" type="password" value={this.state.password} onChange={this.onChange} />
                            {this.state.errors.password && <span className="w3-text-red">{this.state.errors.password}</span>}
                            <p></p>
                            <Button isLoading={this.state.isLoading} text="Log In" loadingText="Loggin In" />
                            <span className="w3-right w3-padding">Forgot <Link to="/forgot-password">password?</Link></span>
                            <p></p>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ merchantLogin }, dispatch);
}

const mapStateToProps = (state) => {
    return {
        isAuthenticated: state.merchant.isAuthenticated
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
