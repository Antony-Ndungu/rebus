import React from "react";
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { merchantLogout, openSidebar } from "../actions/merchantActions";

const TopContainer = ({ merchantName, merchantLogout, openSidebar }) => {
    return (
        <div className="w3-top w3-margin-bottom w3-black" style={{"z-index":4}}>
            <div className="w3-bar w3-large w3-card-4">
                <button className="w3-bar-item w3-button w3-hide-large w3-text-white w3-hover-none w3-hover-text-light-grey" onClick={openSidebar}><i className="fa fa-bars"></i>  Menu</button>
                <div className="w3-dropdown-hover w3-right">
                    <button className="w3-button w3-text-white w3-hover-none w3-hover-text-light-grey">{merchantName} <i className="fa fa-caret-down"></i></button>
                    <div className="w3-dropdown-content w3-bar-block w3-border" style={{ right: 0}}>
                        <button className="w3-bar-item w3-black w3-button w3-text-white w3-hover-black w3-hover-text-light-grey" onClick={merchantLogout}>Log out <i className="w3-right fa fa-sign-out"></i></button>
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
    return bindActionCreators({ merchantLogout, openSidebar}, dispatch);
}

export default connect(null, mapDispatchToProps)(TopContainer);