import React, { Component } from "react";
import { Form, Label, Input, Button, FormGroup } from 'reactstrap';

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: ''
        };
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    }

    handleSubmit = (event) => {
        fetch("http://localhost:3000/api/user/login", {
            method: 'POST',
            body: JSON.stringify({ user: this.state }),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        }).then((response) => response.json()
        ).then((data) => {
            this.props.setToken(data.sessionToken)
        })
        event.preventDefault()
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit} >
                <input id="li_username" type="text" name="username" placeholder="enter username" onChange={this.handleChange} />
                <input id="li_password" type="password" name="password" placeholder="enter password" onChange={this.handleChange} />
                <button type="submit"> Submit </button>
            </form>
        )
    }
}
export default Login;

