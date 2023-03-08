import React from "react";

function SimpleButton(props) {
    return (
        <button className={props.className} onClick={props.onClick}>
            {props.text}   
        </button>
    );
}

export default SimpleButton;


