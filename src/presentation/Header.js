import React from "react";

export default ({icon, title}) => {
    return (
        <header className="w3-container">
            <h5><b><i class={`fa ${icon}`}></i> {title}</b></h5>
        </header>
    );
}