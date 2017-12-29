import React from "react";
import PropTypes from "prop-types";

const Overlay = ({closeSidebar}) => {
    return (
        <div className="w3-overlay w3-hide-large w3-animate-opacity" style={{cursor: "pointer", display: "block"}} title="close side menu"
        id="myOverlay" onClick={closeSidebar}></div>
    );
}

Overlay.propTypes = {
    closeSidebar: PropTypes.func.isRequired
}

export default Overlay;