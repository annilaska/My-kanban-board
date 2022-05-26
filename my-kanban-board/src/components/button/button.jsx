import React from 'react';


const Button = props => {
    return (
        <button className={props.className} disabled={props.disabled} onClick={props.onClick}>{props.name}</button>
    )
}

export default Button; 