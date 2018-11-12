import React, { Component } from "react";
import '../index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class NSignup extends Component {
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
        fetch("http://localhost:3000/api/user/createuser", {
            method: 'POST',
            body: JSON.stringify({ user: this.state }),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        }).then(
            (response) => response.json()
        ).then((data) => {
            this.props.setToken(data.sessionToken)
        })
        event.preventDefault()
    }

    validateSignUp = (event) => {
        this.setState({
            errorMessage: 'Fields must not be empty'
        })
        event.preventDefault();
    }

    render() {
        const submitHandler = !this.state.username ? this.validateSignUp : this.handleSubmit
        return (
            <form onSubmit={submitHandler} >
                <input id="username" type="text" name="username" placeholder="enter username" onChange={this.handleChange} />
                {this.state.errorMessage && <span className="error">user name is required</span>}
                <input id="su_password" type="password" name="password" placeholder="enter password" onChange={this.handleChange} />
                <button type="SIGNUP">SIGNUP</button>
            </form>
        )
    }
}

export default NSignup;