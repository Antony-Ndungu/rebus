import React from "react";

const SuccessAlert = ({subject, message}) => {
    return (
        <div className="w3-panel center w3-green w3-round-large">
            <h3>{subject}</h3>
            <p>{message}</p>
        </div>
    );
}

export default SuccessAlert;