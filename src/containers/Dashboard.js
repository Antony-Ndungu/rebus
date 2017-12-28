import React from "react";
import TopContainer from "./TopContainer";
import Sidebar from "./Sidebar";
import Overlay from "../presentation/Overlay";
import PropTypes from "prop-types"
import { connect } from "react-redux"
import jwt from "jsonwebtoken"

const Dashboard =  ({token, displaySidebar}) => {
    let decoded = jwt.decode(token, { complete: true });
    let merchantName;
    try {
        merchantName = decoded.payload.name;
    }catch(e) {
        merchantName = null;
    }
    return(
        <div>
            <TopContainer merchantName={merchantName}/>
            <br/><br/>
            <Sidebar displaySidebar={displaySidebar}/>
            {displaySidebar && <Overlay/>} 
        </div>
    );
}

Dashboard.propTypes = {
    token: PropTypes.string.isRequired
}

const mapStateToProps = (state) => {
    return {
        token: state.merchant.token,
        displaySidebar: state.merchant.displaySidebar
    }
}

export default connect(mapStateToProps)(Dashboard);