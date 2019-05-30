import React from "react";
import EmailForm from "../components/EmailForm";
import Swirl from "../components/Swirl";

import "./Pages.css";

class Home extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="first-frame-container home-first-frame">
                    <Swirl fill="#17c8fe" />
                    <div className="home-header">
                        <div className="header-name">
                            <b>Culture Hackers</b>
                        </div>
                        <div className="header-text">
                            Our community of culture geeks is dedicated to sharing ideas and
                            discussing new research-backed culture building methods.
                            <br />
                            <br /> Join our newsletter below!
                        </div>
                        <div className="email-form">
                            <EmailForm text="Submit" size="large" />
                        </div>
                    </div>
                </div>
                <div className="frame-container background-blue">
                    <div className="home-community">
                        <div>We want to hear from you!</div>
                        <div>
                            We need our community members contribute to our newsletter so that we
                            can keep delivering you great content. If you have any content or
                            insights you’d like to share with the community, send them over to
                            steve@culturehackers.io.
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;
