import React, { Component } from "react";
import { Link } from "react-router-dom";
import EmailForm from "./EmailForm";

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
                        <img
                            src="/images/Culture Hackers Blue.png"
                            alt="Culture Hackers"
                            height={70}
                        />
                    </Link>
                </div>
                <div>
                    <EmailForm text="Join Newsletter" size="medium" />
                </div>
            </div>
        );
    }
}

export default Header;
