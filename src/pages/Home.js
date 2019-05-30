import React from "react";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import Swirl from "../components/Swirl";

import "./Pages.css";

class Home extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="first-frame-container home-first-frame">
                    <Swirl fill="#edf7fc" />
                    <div className="home-header">
                        <div className="header-name">
                            <b>Culture Hackers</b>
                        </div>
                        <div className="header-text">
                            Join our community of culture geeks dedicated to sharing ideas and
                            discussing new research-backed culture building methods.
                        </div>
                        <DonateButton />
                    </div>
                </div>
                <div className="frame-container">
                    <About />
                </div>
            </div>
        );
    }
}

const DonateButton = () => (
    <div className="button-container">
        <Button component={GoToDonate} className="donate-button" size="large">
            Donate
        </Button>
    </div>
);

const GoToDonate = props => <Link to="/donate" {...props} />;

const About = () => (
    <div className="home-about">
        <div>
            Welcome to Senior Paws Sanctuary!
            <br />
            <img src={"/images/Icons/dog.svg"} alt="Dog" height={70} />
        </div>
        <div>
            Senior Paws Sanctuary, located in Madison Wisconsin, is a senior dog rescue. We provide
            loving homes to senior dogs to live out their days comfortably.
        </div>
    </div>
);

export default Home;
