import React from "react";


const Sidebar = ({displaySidebar}) => {
    let style = displaySidebar ? { "z-index": 3, width: "300px",display:"block"}: { "z-index": 3, width: "300px"};
    return (
        <nav className="w3-sidebar w3-collapse w3-white w3-animate-left" style={style} id="mySidebar"><br />
            <div className="w3-container">
                <h5>Dashboard</h5>
            </div>
            <div className="w3-bar-block">
                <a href="#" className="w3-bar-item w3-button w3-padding-16 w3-hide-large w3-dark-grey w3-hover-black" title="close menu"><i className="fa fa-remove fa-fw"></i>  Close Menu</a>
                <a href="#" className="w3-bar-item w3-button w3-padding primary-color w3-text-white"><i className="fa fa-users fa-fw"></i>  Overview</a>
                <a href="#" className="w3-bar-item w3-button w3-padding"><i className="fa fa-money fa-fw"></i>  Payments</a>
                <a href="#" className="w3-bar-item w3-button w3-padding"><i className="fa fa-users fa-fw"></i>  Customers</a>
                <a href="#" className="w3-bar-item w3-button w3-padding"><i className="fa fa-sitemap fa-fw"></i>  Merchant Profile</a>
                <a href="#" className="w3-bar-item w3-button w3-padding"><i className="fa fa-file fa-fw"></i>  Reports</a>
                <a href="#" className="w3-bar-item w3-button w3-padding"><i className="fa fa-shopping-cart fa-fw"></i>  Marketing</a>
            </div>
        </nav>
    );
}

export default Sidebar;