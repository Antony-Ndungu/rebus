import React, { Component } from "react";
import FormControl from "../presentation/FormControl";
import Button from "../presentation/Button";
import { validateForgotPasswordInput } from "../../shared/validation";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { resetMerchantPassword } from "../actions/merchantActions";
import { Redirect, Link } from "react-router-dom";
import PropTypes from "prop-types";


class ForgotPassword extends Component {

    state = {
        businessShortcode: '',
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
        let errors = validateForgotPasswordInput(this.state);
        if(Object.keys(errors).length){
            this.setState({
                errors,
                isLoading: false
            });
        }else{
            this.setState({
                errors: {}
            });
            this.props.resetMerchantPassword({businessShortcode: this.state.businessShortcode}).then((response) => {
                if(typeof response === "string"){
                    this.setState({
                        isLoading: false,
                        businessShortcode: '',
                        errors: {
                            global: response,
                        }
                    });
                }
            }).catch((err) => console.log(err));
        }
    }

    render(){
        return (
            <div className="center" style={{ width: "100%" }}>
                <h1 className="w3-text-teal w3-center" style={{ textShadow: "1px 1px 0 #444" }}>
                    <b>Rebus</b>
                </h1>
                <div className="w3-card">
                    <div className="w3-container primary-color w3-text-white">
                        <h2>Forgot Password?</h2>
                    </div>
                    {this.state.errors.global && <div className="w3-panel w3-margin w3-red"><p>{this.state.errors.global}</p></div>}
                    <form className="w3-container" onSubmit={this.onSubmit}>
                        <FormControl error={this.state.errors.businessShortcode} label="Business Shortcode" name="businessShortcode" type="text" value={this.state.businessShortcode} onChange={this.onChange}/>
                        {this.state.errors.businessShortcode && <span className="w3-text-red">{this.state.errors.businessShortcode}</span>}  
                        <p></p>
                        <Button isLoading={this.state.isLoading} text="Send reset email" loadingText="Sending reset email"/> 
                        <span className="w3-right w3-padding"><Link to="/login">Cancel</Link></span>
                        <p></p>
                    </form>
                </div>
            </div>
        ); 
    }
}

const mapDispathToProps = (dispatch)=> {
    return bindActionCreators({resetMerchantPassword}, dispatch);
}

ForgotPassword.protoTypes = {
    resetMerchantPassword: PropTypes.func.isRequired
} 

export default connect(null, mapDispathToProps)(ForgotPassword);
