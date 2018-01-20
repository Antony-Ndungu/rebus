import React from "react";

const Payment = ({transId, msisdn, transactionType, accountNumber, amount, timestamp}) => {
    return (
        <tr>
            <td>{transId}</td>
            <td>{msisdn}</td>
            <td>{transactionType}</td>
            <td>{amount}</td>
            <td>{timestamp}</td>
            <td>{accountNumber}</td>
            <td><button className="w3-btn primary-color w3-text-white w3-border w3-round-large"><i className="fa fa-backward"></i> Reverse</button></td>
        </tr>
    );
}

export default Payment;