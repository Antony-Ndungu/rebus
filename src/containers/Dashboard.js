import React, { Component } from "react";
import TopContainer from "./TopContainer";
import Sidebar from "./Sidebar";
import Overlay from "../presentation/Overlay";
import axios from "axios";
import io from "socket.io-client";
import Main from "./Main";
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { bindActionCreators } from "redux";
import jwt from "jsonwebtoken"
import { Link } from "react-router-dom";
import { navigateDashboard, closeSidebar, setAccountBalance, setCustomersNumber,setPaymentsNumber, merchantLogout } from "../actions/merchantActions";


class Dashboard extends Component {

    decoded = jwt.decode(this.props.token, { complete: true });
    socket = io();
    componentWillUnmount(){
        this.socket.disconnect();
    }
    componentDidMount() {
        let businessShortcode;
        try {
            businessShortcode = this.decoded.payload.businessShortcode;
        }catch(err){
            businessShortcode = 1;
        }
        this.socket.on("new customer", (data) => {
            this.props.setCustomersNumber(data.count); 
        });

        this.socket.on("new payment", data => {
            this.props.setPaymentsNumber(data.count);
            this.props.setAccountBalance(data.accountBalance);
        });

        this.socket.emit("details", {
            businessShortcode
        });
        
        axios.get(`/api/count-customers?businessShortcode=${businessShortcode}`)
        .then(({ data }) => {
            if(data.confirmation === "fail"){
                if(data.auth == "failed"){
                    this.props.merchantLogout();
                }
                console.log(data);
            }
            if(data.confirmation === "success"){
                this.props.setCustomersNumber(+data.count);
                axios.get(`/api/count-payments?businessShortcode=${businessShortcode}`)
                .then(({data}) => {
                    if(data.confirmation === "fail"){
                        if(data.auth === "failed"){
                            this.props.merchantLogout();
                        }
                        console.log(data);
                    }
                    if(data.confirmation === "success"){
                        this.props.setPaymentsNumber(+data.count);
                        axios.get(`/api/account-balance?businessShortcode=${businessShortcode}`)
                        .then(({data}) => {
                            if(data.confirmation === "fail"){
                                if(data.auth == "failed"){
                                    this.props.merchantLogout();
                                }
                                console.log(data);
                            }
                            if(data.confirmation === "success"){
                                this.props.setAccountBalance(data.accountBalance);
                            }
                        });
                    }
                })
                .catch( error => {
                    console.log(error);
                })
            }
        })
        .catch(error => {
            console.log(error);
        });
    }
    render(){
        const { displaySidebar, navigateDashboard, closeSidebar, dashboardNavigator } = this.props;
        
        let merchantName;
        try {
            merchantName = this.decoded.payload.name;
        } catch (e) {
            merchantName = null;
        }
        return (
            <div>
                <TopContainer merchantName={merchantName} />
                <br />
                <Sidebar displaySidebar={displaySidebar} navigateDashboard={navigateDashboard} dashboardNavigator={dashboardNavigator} closeSidebar={closeSidebar} />
                {displaySidebar && <Overlay closeSidebar={closeSidebar} />}
                <Main dashboardNavigator={dashboardNavigator}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        token: state.merchant.token,
        displaySidebar: state.merchant.displaySidebar,
        dashboardNavigator: state.merchant.dashboardNavigator
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ navigateDashboard, closeSidebar, setAccountBalance ,setCustomersNumber, setPaymentsNumber, merchantLogout }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);