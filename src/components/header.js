import React, { Component } from 'react';
import Counter from './counter';

class Header extends Component {
    navStyles = {
        backgroundImage: "url('images/white-house.jpg')",
        backgroundSize: "cover",
        backgroundColor: "#eeeeee",
        color: "#333333",
        borderBottom: "1px solid #999999",
        boxShadow: "0 5px 10px rgba(0,0,0,.20)"
    };

    liStyles = {
        display: "inline-block",
        padding: "5px 10px",
        margin: 0,
        width: "33.33%"
    };

    render() {
        return (
            <nav style={this.navStyles} className="mb-4 sticky-top">
                <ul className="d-block m-0 p-0">
                    <li style={this.liStyles} className="h3 text-left">React Clicky Game</li>
                    <li style={this.liStyles} className="h5 text-center">19th Century Presidents</li>
                    <li style={this.liStyles} className="text-right"><Counter></Counter></li>
                </ul>
            </nav>
        );
    }
}

export default Header;