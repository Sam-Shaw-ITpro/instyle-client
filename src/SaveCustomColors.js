import React, { Component } from 'react';
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

    render() {
        return (
            <form onSubmit={this.handleSubmit} >
                {/* <label for="color"></label> */}
                <input id="color" type="text" name="color" value={this.state.color}
                    onChange={this.handleChange} />
                {/* <label for="fSize"></label> */}
                <input type="text" name="fSize" id="fSize" value={this.state.fSize}
                    onChange={this.handleChange} />
                {/* <label for="bordercolor"></label> */}
                <input id="bordercolor" type="text" name="bordercolor" value={this.state.bordercolor} onChange={this.handleChange} />
                <button type="submit">Save your current color scheme!! NOT WORKING RIGHT</button>
            </form>
        ) 
    }
} 

export default SaveCustomColors;