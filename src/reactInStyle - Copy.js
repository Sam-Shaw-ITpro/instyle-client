import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import NewAuth from './auth/NewAuth';
import Displaysavedcolors from "./Displaysavedcolors";
import SaveCustomColors from './SaveCustomColors';
import APIURL from "./helpers/environment"

class ReactInStyle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "",
      bordercolor: "",
      fSize: "",
      sessionToken: '',
    };
    this.testInMain = this.testInMain.bind(this);
  }

  testInMain(e, theme) {
    this.setState({
      color: theme.color,
      bordercolor: theme.bordercolor,
      fSize: theme.fSize,
    })
  }

  componentWillMount() {
    const token = localStorage.getItem('token')
    if (token && !this.state.sessionToken) {
      this.setState({ sessionToken: token });
    }
  }

  setSessionState = (token) => {
    localStorage.setItem('token', token);
    this.setState({ sessionToken: token });
  }

  clickLogout = () => {
    this.setState({ sessionToken: '' });
    localStorage.clear();
  }

  changeColor(e) {
    this.setState({
      color: e.target.value,
    })
  }

  changeBorder(e) {
    this.setState({
      bordercolor: e.target.value,
    })
  }

  changefSize(e) {
    this.setState({
      fSize: e.target.value,
    })
  }

  logout() {
    localStorage.clear();
  }

  dropDownChange = (event) => {
    var switchVal = event.target.value;
    switch (switchVal) {
      case "0":
        this.setState({
          color: "blue",
          bordercolor: "30px dotted black",
          fSize: "25px"
        })
        break;
      case "1":
        this.setState({
          color: "black",
          bordercolor: "5px dotted blue",
          fSize: "15px"
        })
        break;
      case "2":
        this.setState({
          color: "orange",
          bordercolor: "25px solid red",
          fSize: "20px"
        })
        break;
      default:
        console.log('switch default');
    }
  }


  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    fetch(`${APIURL}/api/fav/create`, {
      method: 'POST',
      body: JSON.stringify(this.state),
      headers: new Headers({
        'Content-Type': 'application/json',
        'Authorization': this.state.sessionToken
      })
    })
      .then((res) => this.fetchColors())
  }

  fetchColors = () => {
    console.log("fetchColors")
    fetch(`${APIURL}/api/fav/all`, {
      method: 'GET',
      headers: new Headers({
        'Content-Type': 'application/json',
        'Authorization': this.state.sessionToken
      })
    })
      .then((res) => res.json())
      .then((logData) => {
        return this.setState({ savedcolors: logData },
            () => console.log(this.state))  // NEAT CONSOLE LOG TRICK
    })
  }

  protectedViews = () => {
    console.log('token here?' + this.state.sessionToken)
    if (this.state.sessionToken === localStorage.getItem('token')) {
      return (
        <div>
          <form onSubmit={this.handleSubmit} >
            {/* <input id="color" type="text" name="color" value={this.state.color}
              onChange={this.handleChange} />
            <input id="bordercolor" type="text" name="bordercolor" value={this.state.bordercolor} onChange={this.handleChange} />
            <input type="text" name="fSize" id="fSize" value={this.state.fSize}
              onChange={this.handleChange} /> */}
            <button type="submit">Save your current color scheme!!</button>
          </form>
          <Displaysavedcolors test={this.testInMain} setToken={this.setSessionState} token={this.state.sessionToken}
            color={this.state.color} bordercolor={this.state.bordercolor} fSize={this.state.fSize} />
          <button onClick={() => this.clickLogout()}>Logout</button>
             </div>
      )
    } else {
      return (
        <div>
          <b>Don't be a loser, be a user so you can save your color schemes.</b>
          <NewAuth setToken={this.setSessionState} />
        </div>
      )
    }
  }

  render() {
    const stylesObj = {
      background: this.state.color,
    };

    const stylesObj2 = {
      border: this.state.bordercolor,
    };

    const pStyle = {
      fontSize: this.state.fSize,
    };

    return (
      <div id="color-time-id" style={stylesObj} className="container">
        <br />
        <div id="color-time-id2" style={stylesObj2} className="box">
          <p style={pStyle}>Pre-programmed inStyle color schemes.</p>
          <select onChange={this.dropDownChange}>
            <option>PRE-SELECTED OPTIONS</option>
            <option value="0">Option 1</option>
            <option value="1">Option 2</option>
            <option value="2">Option 3</option>
          </select>
          <p style={pStyle}>Set background color (Name or #HEX).</p>
          <input style={pStyle} name="backgroundcolor" value={this.state.color} placeholder="example: white" onChange={this.changeColor.bind(this)} />
          <br />
          <br />
          <p style={pStyle}>Set border, example: 20px solid blue</p>
          <input style={pStyle} name="borderColor" value={this.state.bordercolor} placeholder="example: 20px solid blue" onChange={this.changeBorder.bind(this)} />
          <br />
          <br />
          <p style={pStyle}>Set font size, for example: 15px</p>
          <input style={pStyle} name="fontsize" value={this.state.fSize} placeholder="example: 15px" onChange={this.changefSize.bind(this)} />
          <br />
        </div>
        {this.protectedViews()}
      </div>
    )
  }
}

export default ReactInStyle;