import React from 'react';

const input = (props) => {
    return (
        // <div className="input">
        //    <label>User name</label>
        //    <input></input> 
        // </div>
        <div className="input">
            <label>{props.labelText}</label>
            <input
                placeholder = {props.placeholderText}
                onChange = {props.handleOnChange}
            />
        </div>
    );
};

export default input;