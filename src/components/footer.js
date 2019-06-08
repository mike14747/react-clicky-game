import React, { Component } from 'react';

class Header extends Component {
    styles = {
        // styles in here need to be in camel case notation instead of using dashes
        backgroundColor: "#eeeeee",
        borderTop: "1px solid #999999",
        color: "#333333",
        fontSize: "12px"
    };

    render() {
        return (
            <footer style={ this.styles } className="d-flex align-items-center justify-content-center p-2 mt-4">
                Copyright &#169; 2019 mike14747
            </footer>
        );
    }
}

export default Header;