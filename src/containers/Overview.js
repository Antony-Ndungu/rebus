import React from "react";
import Header from "../presentation/Header";
import DisplayBoxes from "./DisplayBoxes";
import Footer from "../presentation/Footer";
const Overview = () => {
    return (
        <div>
            <Header title="My Dashboard" icon="fa-dashboard"/>
            <DisplayBoxes/>
            <Footer/>
        </div>    
    );
}

export default Overview;