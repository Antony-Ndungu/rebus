import React from "react";

const PaymentsSearchBar = () => {
    return (
        <div className="w3-row">
            <div className="w3-twothird">
                <div className="w3-row">
                    <div className="w3-third">
                        <select class="w3-select primary-color w3-text-white w3-border-top w3-border-bottom primary-color-border" name="option">
                            <option value="" disabled selected class="w3-text-black"> Search by </option>
                            <option value="1"> Transaction ID</option>
                            <option value="2"> MSISDN</option>
                            <option value="3"> Transaction Type</option>
                            <option value="3"> Account Number</option>
                            <option value="3"> Amount</option>
                            <option value="3"> Timestamp</option>
                        </select>
                    </div>
                    <div className="w3-twothird">
                        <div className="w3-row">
                            <div className="w3-twothird">
                                <input class="w3-input w3-border primary-color-border" type="text" placeholder="Type here to search" />
                            </div>
                            <div className="w3-third">
                                <button class="w3-button primary-color w3-text-white w3-border-top w3-border-bottom primary-color-border" style="width: 100%">Search</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w3-third"></div>
        </div>
    );
}

export default PaymentsSearchBar;