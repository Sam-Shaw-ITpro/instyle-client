import React from 'react';
import SaveCustomColors from './SaveCustomColors';
import DisplaycolorsTable from './DisplaycolorsTable';
import ColorsEdit from './ColorsEdit';

class Displaysavedcolors extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            savedcolors: [],
            updatePressed: false, // added this line
            colorsToUpdate: {} // added this line

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

    updatedColor = (event, savedColor) => {
        fetch(`http://localhost:3000/api/fav/update/${savedColor.id}`, {
            method: 'PUT',
            // body: JSON.stringify({ log: savedColor }),
            body: JSON.stringify(savedColor),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': this.props.token
            })
        })
            .then((res) => {
                this.setState({ updatePressed: false })
                this.fetchColors();
            })
            // .then((logData) => {
            //         return this.setState({ savedcolors: logData },
            //             () => console.log(this.state))
            //     })
            
    }

    setupdatedColor = (event, savedColor) => {
        this.setState({
            colorsToUpdate: savedColor,
            updatePressed: true
        })
    }



    render() {
        const savedcolors = this.state.savedcolors.length >= 1 ?
            <DisplaycolorsTable savedcolors={this.state.savedcolors}
                delete={this.colorsDelete} update={this.setupdatedColor} /> : <h2>Save a color scheme!!!</h2>

        return (
            <div>
                <div>
                    <SaveCustomColors token={this.props.token} updateColorsArray={this.fetchColors}
                        color={this.props.color} bordercolor={this.props.bordercolor} fSize={this.props.fSize} />
                </div>
                {savedcolors}
                <div>
                    {this.state.updatePressed ? <ColorsEdit t={this.state.updatePressed} update={this.updatedColor} savedColor={this.state.colorsToUpdate} />
                        : <div></div>}
                </div>
            </div>
        )

    }
}
export default Displaysavedcolors;