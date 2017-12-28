import React from "react";
import TopContainer from "./TopContainer";
import PropTypes from "prop-types"
import { connect } from "react-redux"
import jwt from "jsonwebtoken"





const Dashboard =  ({token}) => {
    let decoded = jwt.decode(token, { complete: true });
    let merchantName;
    try {
        merchantName = decoded.payload.name;
    }catch(e) {
        merchantName = null;
    }
    return <TopContainer merchantName={merchantName}/>;
}

Dashboard.propTypes = {
    token: PropTypes.string.isRequired
}

const mapStateToProps = (state) => {
    return {
        token: state.merchant.token
    }
}

export default connect(mapStateToProps)(Dashboard);