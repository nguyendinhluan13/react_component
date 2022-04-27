import React from 'react';
import styles from './Button.module.css';

const button = (props) => {
    return (
        <div>
            {/* <button onClick={() => alert('Ái dà ok luôn :V')}>Click tôi đi</button> */}
            <button className={styles.btn} onClick={() =>props.onClickHandle} >
                {props.btnText}
            </button>
        </div>
    );
};

export default button;