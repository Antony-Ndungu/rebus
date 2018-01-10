import React from "react";
import PropTypes from "prop-types";

const DisplayBox =  ({title, value, icon}) => {
    return (
        <div className="w3-container primary-color w3-text-white w3-padding-16 w3-card-4">
            <div className="w3-left"><i className={`fa ${icon} w3-xxxlarge`}></i></div>
            <div className="w3-right">
                <h3>{value}</h3>
            </div>
            <div className="w3-clear"></div>
            <h4>{title}</h4>
        </div>
    );
}

DisplayBox.propTypes = {
    title: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
}

export default DisplayBox;

