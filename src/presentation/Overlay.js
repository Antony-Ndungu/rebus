import React from "react";

const Overlay = () => {
    return (
        <div className="w3-overlay w3-hide-large w3-animate-opacity" style={{cursor: "pointer", display: "block"}} title="close side menu"
        id="myOverlay"></div>
    );
}

export default Overlay;