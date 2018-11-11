import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import reactInStyle from "./reactInStyle";
import "./index.css";

class SaveCustomColors extends Component {
    constructor(props) {
        super(props)
        this.state = {
            color: props.color,
            bordercolor: props.bordercolor,
            fSize: props.fSize,
        };
    }

    componentWillMount() {
        console.log('console state  ' + this.state.color + this.state.fSize + this.state.bordercolor)
        console.log('and this.state  ' + this.state)
    }


    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        fetch(`http://localhost:3000/api/fav/create`, {
            method: 'POST',
            // body: JSON.stringify({ fav: this.state }),
            body: JSON.stringify(this.state),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': this.props.token
            })
        })
            .then((res) => res.json())
        // .then((logData) => {
        //     return this.setState({ savedcolors: logData },
        //         () => console.log('in savecust logdata >' + this.logdata + this.state))  // NEAT CONSOLE LOG TRICK
        // })
    }

    // at 200pm
    // })
    // .then((res) => res.json())
    // .then((logData) => {
    //     return this.setState({ savedcolors: logData },
    //         () => console.log('in savecust logdata >' + this.logdata + this.state))  // NEAT CONSOLE LOG TRICK
    // })
    // }

    //from workoutlog
    // .then((res) => res.json())
    // .then((logData) => {
    //     this.props.updateColorsArray()
    //     this.setState({      //////// sam do i need this?????
    //         color: '',
    //         bordercolor: '',
    //         fSize: ''
    //         })
    // })
    // }

    render() {
        return (
            <form onSubmit={this.handleSubmit} >
                {/* <label for="color"></label> */}
                <input id="color" type="text" name="color" value={this.state.color}
                    onChange={this.handleChange} />
                {/* <label for="fSize"></label> */}
                <input type="text" name="fSize" id="fSize" value={this.state.fSize}
                    onChange={this.handleChange} placeholder="Type" onChange={this.handleChange} />
                {/* <label for="bordercolor"></label> */}
                <input id="bordercolor" type="text" name="bordercolor" value={this.state.bordercolor} placeholder="enter bordercolor" onChange={this.handleChange} />
                <button type="submit">Save color scheme!!</button>
            </form>

        )
    }
}

export default SaveCustomColors;