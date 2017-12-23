import React from "react";
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { merchantLogout } from "../actions/merchantActions";

const TopContainer = ({ merchantName, merchantLogout }) => {
    return (
        <div className="w3-top">
            <div className="w3-bar primary-color-text w3-large w3-card-4">
                <button className="w3-bar-item w3-button w3-hide-large w3-hover-none w3-hover-text-light-grey"><i className="fa fa-bars"></i>  Menu</button>
                <div className="w3-dropdown-hover w3-right">
                    <button className="w3-button w3-white w3-text-teal w3-hover-teal w3-hover-text-white">{merchantName} <i className="fa fa-caret-down"></i></button>
                    <div className="w3-dropdown-content w3-bar-block w3-border" style={{ right: 0}}>
                        <button className="w3-bar-item w3-button w3-hover-teal w3-hover-text-white" onClick={merchantLogout}>Log out <i className="w3-right fa fa-sign-out"></i></button>
                    </div>
                </div>
            </div>
        </div>
    );
}

TopContainer.propTypes = {
    merchantName: PropTypes.string.isRequired,
    merchantLogout: PropTypes.func.isRequired
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ merchantLogout }, dispatch);
}

export default connect(null, mapDispatchToProps)(TopContainer);