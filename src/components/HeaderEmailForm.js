import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

import "./EmailForm.css";

class HeaderEmailForm extends React.Component {
    state = {
        email: ""
    };

    handleSubmit = () => {
        document.getElementById("header-form-email").submit();
    };

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value
        });
    };

    render() {
        const { size, text } = this.props;

        console.log("this.state: ", this.state.email);

        return (
            <form
                action="https://dislack.com/send/5cf04b489b64665469f19e8c"
                method="post"
                id="header-form-email"
                className="email-form-containter"
            >
                <TextField
                    id="outlined-with-placeholder"
                    className="email-form-text-field"
                    label="Email"
                    type="email"
                    name="email"
                    variant="outlined"
                    value={this.state.email}
                    onChange={this.handleChange("email")}
                />
                <div className="email-form-button-container">
                    <Button className="email-form-button" onClick={this.handleSubmit} size={size}>
                        {text}
                    </Button>
                </div>
            </form>
        );
    }
}

export default HeaderEmailForm;
