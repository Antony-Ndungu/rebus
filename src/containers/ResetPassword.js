import React, { Component } from "react";
import FormControl from "../presentation/FormControl";
import Button from "../presentation/Button";
import { Redirect, Link } from "react-router-dom";
import { validateResetPasswordInput } from "../../shared/validation";
import { resetPassword } from "../actions/merchantActions";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

class ResetPassword extends Component {

    state = {
        password: '',
        confirmPassword: '',
        errors: {},
        isLoading: false,
        success: false,
        message: ''
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
        const errors = validateResetPasswordInput(this.state);
        if(Object.keys(errors).length){
            this.setState({
                errors,
                isLoading:false
            });
        }else{
            this.setState({
                errors: {}
            });
            this.props.resetPassword({password: this.state.password, token: this.props.location.search.slice(1)})
            .then((response) => {
                if(response.data.confirmation === "fail"){
                    this.setState({
                        errors: {
                            global: response.data.message
                        },
                        isLoading: false,
                        password: '',
                        confirmPassword: ''
                    });
                }else if(response.data.confirmation === "success"){
                    console.log(response.data.message);
                    this.setState({
                        success: true,
                        message: response.data.message,
                        isLoading: false
                    })
                }
            })
            .catch((err) => console.log(err));
        }
    }

    render(){
        const { errors, password, isLoading, confirmPassword, success, message } = this.state;
        return (
            <div className="center" style={{ width: "100%" }}>
                <h1 className="w3-text-teal w3-center" style={{ textShadow: "1px 1px 0 #444" }}>
                    <b>Rebus</b>
                </h1>
                <div className="w3-card">
                    <div className="w3-container primary-color w3-text-white">
                        <h2>Reset Password</h2>
                    </div>
                    {success && <div className="w3-panel w3-margin w3-green"><p>{message}</p></div>}
                    {errors.global && <div className="w3-panel w3-margin w3-red"><p>{errors.global}</p></div>}
                    <form className="w3-container" onSubmit={this.onSubmit}>
                        <FormControl error={errors.password} label="New Password" name="password" type="password" value={password} onChange={this.onChange}/>
                        {errors.password && <span className="w3-text-red">{errors.password}</span>}  
                        <FormControl error={errors.confirmPassword} label="Confirm Password" name="confirmPassword" type="password" value={confirmPassword} onChange={this.onChange}/>
                        {errors.confirmPassword && <span className="w3-text-red">{errors.confirmPassword}</span>}  
                        <p></p>
                        <Button isLoading={isLoading} text="Reset Password" loadingText="Resetting Password"/> 
                        <span className="w3-right w3-padding"><Link to="/login">{success? "Login": "Cancel"}</Link></span>
                        <p></p>
                    </form>
                </div>
            </div>
        ); 
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ resetPassword }, dispatch);
}

export default connect(null, mapDispatchToProps)(ResetPassword);