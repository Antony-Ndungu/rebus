import React, { Component } from "react";
import DatePicker from "react-datepicker";
import moment from 'moment';

import 'react-datepicker/dist/react-datepicker.css';

const MyCustomInput = (props) => <button className="w3-button primary-color w3-text-white" onClick={props.onClick}>{props.value}</button>;

class PaymentSearchForm extends Component {
    state = {
        startDate: moment(),
        endDate: moment()
    }

    handleStartChange = date => {
        this.setState({
            startDate: date
        });
    }

    handleEndChange = date => {
        this.setState({
            endDate: date
        });
    }
    render() {
        return (
            <div className="payment-search-form w3-card-4 w3-small">
                <div className="w3-container primary-color w3-text-white w3-margin-bottom">
                    <h4>Search Payments</h4>
                </div>
                <form className="w3-container">
                    <div className="w3-row-padding">
                        <div className="w3-quarter">
                            <label><strong>Transaction ID</strong></label>
                            <input className="w3-input w3-border" type="text" placeholder="Transaction ID" />
                        </div>
                        <div class="w3-quarter">
                            <label><strong>MSISDN</strong></label>
                            <input className="w3-input w3-border" type="text" placeholder="MSISDN" />
                        </div>
                        <div class="w3-quarter">
                            <label><strong>Account Number</strong></label>
                            <input className="w3-input w3-border" type="text" placeholder="Account Number" />
                        </div>
                        <div className="w3-quarter">
                            <label><strong>Transaction Type</strong></label>
                            <select className="w3-select w3-border" name="option">
                                <option value="" disabled selected>Transaction Type</option>
                                <option value="1">Merchant Payment</option>
                                <option value="2">Paybill</option>
                            </select>
                        </div>
                    </div>

                    <div className="w3-row-padding">
                        <div className="w3-panel w3-light-gray w3-center w3-round-large">
                            <label><strong>Duration</strong></label>
                            <div className="w3-row-padding">
                                <div className="w3-half w3-margin-bottom"><span>From</span>
                                    <DatePicker
                                        selected={this.state.startDate}
                                        onChange={this.handleStartChange}
                                        customInput = {<MyCustomInput/>}
                                        showTimeSelect
                                        timeFormat="HH:mm"
                                        timeIntervals={15}
                                        dateFormat="LLL"
                                        timeCaption="Time"
                                        calendarClassName="w3-input w3-border"
                                    />
                                </div>
                                <div className="w3-half w3-margin-bottom"><span>To</span>
                                    <DatePicker
                                        selected={this.state.endDate}
                                        onChange={this.handleEndChange}
                                        customInput = {<MyCustomInput/>}
                                        showTimeSelect
                                        timeFormat="HH:mm"
                                        timeIntervals={15}
                                        dateFormat="LLL"
                                        timeCaption="Time"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w3-margin-top w3-center">
                        <p>
                            <button className="w3-button w3-white w3-border primary-color-border w3-round-large">Search Payments</button>
                        </p>
                    </div>

                </form>
            </div>
        );
    }
}

export default PaymentSearchForm;