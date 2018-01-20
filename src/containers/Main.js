import React from "react";
import asyncComponent from "../AsyncComponent";
import { Route } from "react-router-dom";
import PropTypes from "prop-types";

const AsyncOverview = asyncComponent(() => import("./Overview"));
const AsyncPayments = asyncComponent(() => import("./Payments"));
const AsyncCustomers = asyncComponent(() => import("./Customers"));

const Main = ({ dashboardNavigator }) => {
    let content = undefined;
    switch (dashboardNavigator) {
        case 0:
            content = <AsyncOverview />
            break;
        case 1:
            content = <AsyncPayments />
            break;
        case 2:
            content = <AsyncCustomers />
            break;
    }
    return (
        <div className="w3-main" style={{ "margin-left": "300px", "margin-top": "20px" }}>
            {content}
        </div>
    );
}

Main.propTypes = {
    dashboardNavigator: PropTypes.number.isRequired
}

export default Main;