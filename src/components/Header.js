import React, { Component } from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

import "./Header.css";

class Header extends Component {
    constructor(props) {
        super(props);

        // set the initial state
        this.state = {};
    }

    render() {
        return (
            <div className="menu">
                <div>
                    <Link to="/">
                        <img src="/images/Culture Hackers.png" alt="Culture Hackers" height={40} />
                    </Link>
                </div>
            </div>
        );
    }
}

export default Header;
