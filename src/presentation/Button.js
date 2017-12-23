import React from "react";

const Button = ({ isLoading }) => {
    return (
        <button
            disabled={isLoading}
            className="w3-btn primary-color w3-text-white w3-border">
            {isLoading ? "Logging In" : "Log In"} {isLoading? <i className="fa fa-circle-o-notch fa-spin"></i>: null}
        </button>
    )

}


export default Button;