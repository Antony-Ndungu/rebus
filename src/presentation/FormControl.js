import React from "react";
import classnames from "classnames";

export default (props) => {
    return (
        <div>
            <p>
                <label>{props.label}</label>
                <input className={classnames("w3-input", {"w3-border-red": props.error})} name={props.name} type={props.type} value={props.value} onChange={props.onChange}/>
            </p>
        </div>
    );
}