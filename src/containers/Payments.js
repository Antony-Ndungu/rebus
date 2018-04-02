import React, { Component } from "react";
import Footer from "../presentation/Footer";
import Header from "../presentation/Header";
import Payment from "../presentation/Payment";
import jwt from "jsonwebtoken";
import Pagination from "../presentation/Pagination";
import PaymentSearchForm from "../presentation/PaymentSearchForm";
import { bindActionCreators } from "redux";
import { searchPayments } from "../actions/merchantActions";
import { connect } from "react-redux";

class Payments extends Component {
    businessShortcode = jwt.decode(this.props.token, { complete: true }).payload.businessShortcode;
    componentDidMount() {
        this.props.searchPayments({ businessShortcode: this.businessShortcode });
    }
    render() {
        const { docs, pages } = this.props;
        let payments = docs.map(({ id, transId, msisdn, transactionType, accountNumber, amount, timestamp }) => {
            return (
                <Payment key={id}
                    transId={transId}
                    msisdn={msisdn}
                    transactionType={transactionType}
                    accountNumber={accountNumber}
                    amount={amount}
                    timestamp={timestamp}
                />
            )
                ;
        });
        return (
            <div>
                <Header title="Payments" icon="fa-money" />
                <div className="w3-container">
                    <PaymentSearchForm />
                    <div className="w3-responsive">
                        <table className="w3-table-all w3-hoverable w3-card-4 w3-small w3-margin-top">
                            <thead>
                                <tr className="primary-color-text">
                                    <th>Transaction ID</th>
                                    <th>MSISDN</th>
                                    <th>Transaction Type</th>
                                    <th>Amount</th>
                                    <th>Transaction Time</th>
                                    <th>Account Number</th>
                                    <th>Action</th>
                                </tr>
                                {payments}
                            </thead>
                        </table>
                    </div>
                </div>
                { this.props.fetching ? <div className="w3-center w3-text-teal"><strong>Fetching...</strong></div> :  <br/>}
                <Pagination searchPayments={this.props.searchPayments} businessShortcode={this.businessShortcode}/>
                <Footer />
            </div>
        );
    }
}
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ searchPayments }, dispatch)
}
const mapStateToProps = (state) => {
    return {
        token: state.merchant.token,
        docs: state.merchant.payments.docs,
        fetching: state.merchant.fetching
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Payments);