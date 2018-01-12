import React, { Component } from "react";
import DisplayBox from "../presentation/DisplayBox";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import PropTypes from "prop-types";

class DisplayBoxes extends Component {
    componentDidMount(){
        
    }
    render(){
        const { payments, customers, balance } = this.props;
        return (
            <div className="w3-row-padding w3-margin-bottom">
                <div className="w3-third">
                    <DisplayBox title="Payments" value={String(payments)} icon="fa-money"/>
                </div>
                <div className="w3-third">
                    <DisplayBox title="Account Balance" value={`Ksh. ${balance}`} icon="fa-balance-scale"/>
                </div>
                <div className="w3-third">
                    <DisplayBox title="Customers" value={String(customers)} icon="fa-users"/>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        payments: state.merchant.paymentsNumber,
        customers: state.merchant.customersNumber,
        balance: state.merchant.accountBalance
    }
}

DisplayBoxes.propTypes = {
    payments: PropTypes.number.isRequired,
    customers: PropTypes.number.isRequired,
    balance: PropTypes.string.isRequired
}

export default connect(mapStateToProps)(DisplayBoxes);
