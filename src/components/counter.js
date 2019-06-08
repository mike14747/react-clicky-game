import React, { Component } from 'react';

class Counter extends Component {
    state = {
        count: 0
    };

    styles = {
        fontSize: "32px"
    };

    handleIncrement = () => {
        this.setState({ count: this.state.count + 1 });
    };

    render() {
        return (
            <div style={ this.styles } className="px-2">
                Score: {this.state.count}/12
            </div>
        );
    }
}

export default Counter;