import React, { Component } from "react";

class PaymentSearchModal extends Component {
    state = {
        display: "none",
        transId: "",
        msisdn: "",
        transactionType: "",
        accountNumber: "",
        from: "",
        to: ""
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        });
        console.log(this.state);
    }
    
    displayModal = () => {
        this.setState({
            display: "block"    
        });
    }
    closeModal = () => {
        this.setState({
            display: "none"
        });
    }
    render() {
        const { msisdn, transactionType, accountNumber, transId, to, from } = this.state;
        return (
        <div>
            <button className="w3-btn w3-teal" onClick={this.displayModal}><i className="fa fa-search"></i></button>
            <div id="searchPayments" className="w3-modal" style={{ display: this.state.display }}>
                <div className="w3-modal-content w3-card-4 w3-animate-zoom" style="max-width:600px">
                    <header className="w3-container w3-teal">
                        <span className="w3-button w3-display-topright" onClick={this.closeModal}>&times;</span>
                        <h2>Search Payments</h2>
                    </header>
                    <div className="w3-container">
                        <form className="w3-margin-top">
                            <div className="w3-row">
                                <div className="w3-col m6 l6 w3-panel">
                                    <input type="search" className="w3-input w3-border  w3-border-teal" name="transId" onChange={this.handleChange} value={transId}/>
                                    <label> Transaction ID</label>
                                </div>
                                <div className="w3-col m6 l6 w3-panel">
                                    <input type="search" className="w3-input w3-border w3-border-teal" name="msisdn" onChange={this.handleChange} value={msisdn}/>
                                    <label> MSISDN</label>
                                </div>
                            </div>
                            <div className="w3-row"> 
                                <div className="w3-col m6 l6 w3-panel">
                                    <select className="w3-select w3-border w3-border-teal" name="option" name="transactionType" onChange={this.handleChange} value={transactionType}>
                                        <option value="" disabled selected>Choose Transaction Type</option>
                                        <option value="1">Merchant Payment</option>
                                        <option value="2">Paybill</option>
                                    </select>
                                </div>
                                <div className="w3-col m6 l6 w3-panel">
                                    <input type="search" className="w3-input w3-border w3-border-teal" name="accountNumber" onChange={this.handleChange} value={accountNumber}/>
                                    <label>Account Number</label>
                                </div>
                            </div>
                            <div className="w3-row">
                                <div className="w3-col m6 l6 w3-panel">
                                    <input type="datetime-local" className="w3-input w3-border w3-border-teal" name="from" onChange={this.handleChange} value={from}/>
                                    <label>from</label>
                                </div>
                                <div className="w3-col m6 l6 w3-panel">
                                    <input type="datetime-local" className="w3-input w3-border w3-border-teal" name="to" onChange={this.handleChange} value={to}/>
                                    <label>to</label>
                                </div>
                            </div>
                        </form>
                    </div>

                    <footer className="w3-container w3-padding-16">
                        <div className="w3-panel">
                            <button className="w3-btn w3-teal">Search</button>
                            <button className="w3-btn w3-red w3-right" onClick={this.closeModal}>Cancel</button>
                        </div>
                    </footer>
                </div>
            </div>
        </div>
        );
    }
}

export default PaymentSearchModal;