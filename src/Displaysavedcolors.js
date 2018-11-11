import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import SaveCustomColors from './SaveCustomColors';
import DisplaycolorsTable from './DisplaycolorsTable';

class Displaysavedcolors extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            savedcolors: [],
        }
    }
    componentWillMount() {
        this.fetchColors()
    }

    fetchColors = () => {
        fetch("http://localhost:3000/api/fav/all", {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': this.props.token
            })
        })
            .then((res) => res.json())
            .then((logData) => {
                return this.setState({ savedcolors: logData },
                    () => console.log(this.state))  // NEAT CONSOLE LOG TRICK
            })
    }

    colorsDelete = (event) => {
        fetch(`http://localhost:3000/api/fav/delete/${event.target.id}`, {
            method: 'DELETE',
            body: JSON.stringify({ log: { id: event.target.id } }),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': this.props.token
            })
        })
            .then((res) => this.fetchColors())
    }

    // - this needs to do a state change to set the colors to whatever this entry is
    updatedWorkout = (event, workout) => {
        fetch(`http://localhost:3000/api/log/update/${workout.id}`, {
            method: 'PUT',
            body: JSON.stringify({ log: workout }),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': this.props.token
            })
        })
            .then((res) => {
                this.setState({ updatePressed: false })
                this.fetchWorkouts();
            })
    }


    //remove 
    // testFunction = () => {
    //     return this.state.savedcolors.map((color) => {
    //         return (
    //             <p>{color.description}</p>
    //         )
    //     })
    // }

    render() {
        const savedcolors = this.state.savedcolors.length >= 1 ?
            <DisplaycolorsTable savedcolors={this.state.savedcolors}
                delete={this.colorsDelete} update={this.setUpdatedWorkout} /> : <h2>Save a color scheme!!!</h2>
        // return (
        //     <Container>
        //         <Row>
        //             <Col md="3">                                      
        //                 <SaveCustomColors token={this.props.token} updateColorsArray={this.fetchWorkouts}
        //                        color={this.props.color} bordercolor={this.props.bordercolor} fSize={this.props.fSize}  />
        //             </Col>
        //             <Col md="3">
        //                 {savedcolors}
        //             </Col>
        //         </Row>

        //         <Col md="12">
        //         {/* THIS DOESN'T WORK!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! */}
        //             {
        //             this.state.updatePressed ? <colorsEdit t={this.state.updatePressed} update={this.updatedWorkout} workout={this.state.workoutToUpdate} />
        //             : <div></div>
        //             }
        //         </Col>
        //     </Container>
        // )

        return (
            <div>
                <div>
                    <SaveCustomColors token={this.props.token} updateColorsArray={this.fetchWorkouts}
                        color={this.props.color} bordercolor={this.props.bordercolor} fSize={this.props.fSize} />
                </div>
                {savedcolors}
            </div>
        )

    }
}
export default Displaysavedcolors;