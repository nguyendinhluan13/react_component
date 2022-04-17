import React from 'react';

const button = (props) => {
    return (
        <div>
            {/* <button onClick={() => alert('Ái dà ok luôn :V')}>Click tôi đi</button> */}
            <button onClick={props.onClickHandle} >
                {props.btnText}
            </button>
        </div>
    );
};

export default button;