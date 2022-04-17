import React, {useState} from 'react';

const Text = (props) => {
    // const [name, setName] = useState()
    // const [age, setAge] = useState()
    return (
        <div>
            {/* <h1>Hello {name}</h1>
            <h2>Age: {age}</h2> */}
            <h1>
                {props.text}
            </h1>
        </div>
    );
};

export default Text;