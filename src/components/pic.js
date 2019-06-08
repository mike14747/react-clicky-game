import React, { Component } from 'react';
import './picStyles.css';

class Pic extends Component {
    constructor(props) {
        super(props);
        console.log("");
    }

    state = {
        hasBeenClicked: false
    };

    picClicked() {
        this.setState({ hasBeenClicked: true });
    }

    render() {
        return (
            <div className="myCol imgDiv">
                <img className="imgStyles" alt="President" src={this.props.image} onClick={() => this.picClicked()} />
            </div>
        );
    }
}

export default Pic;