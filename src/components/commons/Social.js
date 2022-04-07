import React from 'react';

class Social extends React.Component {
    constructor(props) {
        super(props);
        this.state = { name: 'Luan'}
    }
    render() {
        return <h1>Hello {this.state.name}</h1>;
    }
}

export default Social;