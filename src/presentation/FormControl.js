import React from "react";

export default (props) => {
    return (
        <div>
            <p>
                <label>{props.label}</label>
                <input className="w3-input" name={props.name} type={props.type} value={props.value} onChange={props.onChange}/>
            </p>
        </div>
    );
}