import React, { Component } from "react";
import FormControl from "../presentation/FormControl";
import validation from "../../shared/validation";


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
        const { errors , isValid } = validation(this.state);
        this.setState({
            errors
        });
    
        if (isValid) {
            
        } else {
           
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
                        <h2>Login</h2>
                    </div>
    
                    <form className="w3-container" onSubmit={this.onSubmit}>
                        <FormControl error={this.state.errors.businessShortcode} label="Business Shortcode" name="businessShortcode" type="text" value={this.state.businessShortcode} onChange={this.onChange}/>
                        {this.state.errors.businessShortcode && <span className="w3-text-red">{this.state.errors.businessShortcode}</span>}
                        <FormControl error={this.state.errors.password} label="Password" name="password" type="password" value={this.state.password} onChange={this.onChange}/>
                        {this.state.errors.password && <span className="w3-text-red">{this.state.errors.password}</span>}
                        <p></p>
                        <button disabled={this.state.isLoading} className="w3-btn primary-color w3-text-white w3-border">{this.state.isLoading? "Logging in" : "Login"}</button>
                        <span className="w3-right w3-padding w3-hide-small">Forgot <a href="#">password?</a></span>
                        <p></p>
                    </form>
                </div>
            </div>
        ); 
    }
}

export default Login;
