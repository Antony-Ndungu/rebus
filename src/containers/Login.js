import React, { Component } from "react";
import FormControl from "../presentation/FormControl"

class Login extends Component {

    state = {
        businessShortcode: '',
        password: '',
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
        setTimeout(() => console.log(this.state) , 50000);        
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
                        <FormControl label="Business Shortcode" name="businessShortcode" type="text" value={this.state.businessShortcode} onChange={this.onChange}/>
                        <FormControl label="Password" name="password" type="password" value={this.state.password} onChange={this.onChange}/>
                        
                        <button disabled={this.state.isLoading} className="w3-btn primary-color w3-text-white w3-border">{this.state.isLoading? "Logging in" : "Log"}</button>
                        <span className="w3-right w3-padding w3-hide-small">Forgot <a href="#">password?</a></span>
                        <p></p>
                    </form>
                </div>
            </div>
        ); 
    }
}

export default Login;
