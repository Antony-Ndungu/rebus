import React from "react";
import { Link } from "react-router-dom";
import classnames from "classnames";
import PropTypes from "prop-types";

const Sidebar = ({displaySidebar, dashboardNavigator, navigateDashboard, closeSidebar}) => {
    let style = displaySidebar ? { "z-index": 3, width: "300px",display:"block"}: { "z-index": 3, width: "300px"};
    return (
        <nav className="w3-sidebar w3-collapse w3-white w3-animate-left" style={style} id="mySidebar"><br />
            <div className="w3-container">
                <h5>Dashboard</h5>
            </div>
            <div className="w3-bar-block">
                <a href="#" className="w3-bar-item w3-button w3-padding-16 w3-hide-large w3-dark-grey w3-hover-black" title="close menu" onClick={closeSidebar}><i className="fa fa-remove fa-fw"></i>  Close Menu</a>
                <a href="#" className={classnames("w3-bar-item w3-button w3-padding", {"primary-color": dashboardNavigator === 0, "w3-text-white": dashboardNavigator === 0 })} onClick={() => navigateDashboard(0)}><i className="fa fa-users fa-fw"></i>  Overview</a>
                <a href="#" className={classnames("w3-bar-item w3-button w3-padding", {"primary-color": dashboardNavigator === 1, "w3-text-white": dashboardNavigator === 1 })} onClick={() => navigateDashboard(1)}><i className="fa fa-money fa-fw"></i>  Payments</a>
                <a to="#" className={classnames("w3-bar-item w3-button w3-padding", {"primary-color": dashboardNavigator === 2, "w3-text-white": dashboardNavigator === 2 })} onClick={() => navigateDashboard(2)}><i className="fa fa-users fa-fw"></i>  Customers</a>
                <a href="#" className={classnames("w3-bar-item w3-button w3-padding", {"primary-color": dashboardNavigator === 3, "w3-text-white": dashboardNavigator === 3 })}><i className="fa fa-sitemap fa-fw"></i>  Merchant Profile</a>
                <a href="#" className={classnames("w3-bar-item w3-button w3-padding", {"primary-color": dashboardNavigator === 4, "w3-text-white": dashboardNavigator === 4 })}><i className="fa fa-file fa-fw"></i>  Reports</a>
                <a href="#" className={classnames("w3-bar-item w3-button w3-padding", {"primary-color": dashboardNavigator === 5, "w3-text-white": dashboardNavigator === 5 })}><i className="fa fa-shopping-cart fa-fw"></i>  Marketing</a>
            </div>
        </nav>
    );
}

Sidebar.propTypes = {
    displaySidebar: PropTypes.bool.isRequired,
    dashboardNavigator: PropTypes.number.isRequired,
    navigateDashboard: PropTypes.func.isRequired,
    closeSidebar: PropTypes.func.isRequired
}

export default Sidebar;