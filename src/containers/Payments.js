import React from "react";
import Footer from "../presentation/Footer";
import Header from "../presentation/Header";


const Payments = () => {
    return (
        <div>
            <Header title="Payments" icon="fa-money" />
            <div className="w3-container">
                <div className="w3-responsive">
                   <form className="w3-container">
                       <label>Transaction ID</label>
                       <input className="w3-input" type="text"/>
                   </form> 
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Payments;