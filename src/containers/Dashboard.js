import React from "react";
import TopContainer from "./TopContainer";
import Sidebar from "./Sidebar";
import Overlay from "../presentation/Overlay";
import Main from "./Main";
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { bindActionCreators } from "redux";
import jwt from "jsonwebtoken"
import { Link } from "react-router-dom";
import { navigateDashboard, closeSidebar } from "../actions/merchantActions";

const Dashboard = ({ token, displaySidebar, navigateDashboard, closeSidebar, dashboardNavigator }) => {
    let decoded = jwt.decode(token, { complete: true });
    let merchantName;
    try {
        merchantName = decoded.payload.name;
    } catch (e) {
        merchantName = null;
    }
    return (
        <div>
            <TopContainer merchantName={merchantName} />
            <br /><br />
            <Sidebar displaySidebar={displaySidebar} navigateDashboard={navigateDashboard} dashboardNavigator={dashboardNavigator} closeSidebar={closeSidebar} />
            {displaySidebar && <Overlay closeSidebar={closeSidebar} />}
            <Main dashboardNavigator={dashboardNavigator}/>
        </div>
    );
}

Dashboard.propTypes = {
    token: PropTypes.string.isRequired,
    displaySidebar: PropTypes.bool.isRequired,
    dashboardNavigator: PropTypes.number.isRequired,
    closeSidebar: PropTypes.func.isRequired,
    navigateDashboard: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
    return {
        token: state.merchant.token,
        displaySidebar: state.merchant.displaySidebar,
        dashboardNavigator: state.merchant.dashboardNavigator
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ navigateDashboard, closeSidebar }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);