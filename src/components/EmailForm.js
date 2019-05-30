import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

import "./EmailForm.css";

class EmailForm extends React.Component {
    state = {
        email: ""
    };

    handleSubmit = () => {
        document.getElementById("form-email").submit();
    };

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value
        });
    };

    render() {
        const { size, text } = this.props;

        return (
            <form
                action="https://dislack.com/send/5cba2caf7e1a631b44de68d8"
                method="post"
                id="form-email"
                className="form-email"
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

export default EmailForm;
