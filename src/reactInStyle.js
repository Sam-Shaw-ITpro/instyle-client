import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import NewAuth from './auth/NewAuth';
import Displaysavedcolors from "./Displaysavedcolors";

class ReactInStyle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "darkgrey",
      bordercolor: "3px dotted black",
      fSize: "20px",
      sessionToken: '',
      testingColors: 'something',
    };
    this.testInMain = this.testInMain.bind(this);
  }

  testInMain() {
    this.setState({
      // color: this.props.color,
      // bordercolor: this.props.bordercolor,
      // fSize: this.props.fSize,
      color: 'purple',
      borderColor: '10px solid blue',
      fSize: '25px',
      testingColors: this.colorList,
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
    // window.location.href = '/';
  }

  dropDownChange = (event) => {
    var switchVal = event.target.value;
    // console.log("SAM IS THIS WORKING? VALUE =" + switchVal);
    switch (switchVal) {
      case "0":
        this.setState({
          color: "blue",
          bordercolor: "30px dotted black",
          fSize: "25px"
        })
        // console.log("INSIDE 0");
        break;
      case "1":
        this.setState({
          color: "black",
          bordercolor: "5px dotted blue",
          fSize: "15px"
        })
        // console.log("INSIDE 1");
        break;
      case "2":
        this.setState({
          color: "orange",
          bordercolor: "25px solid red",
          fSize: "20px"
        })
        // console.log("INSIDE 2");
        break;
      default:
        console.log('switch default');
    }
  }

  // this is from app.js in workoutlogclient
  protectedViews = () => {
    console.log('token here?' + this.state.sessionToken)
    if (this.state.sessionToken === localStorage.getItem('token')) {
      return (
        <div>

          <Displaysavedcolors test={this.testInMain} setToken={this.setSessionState} token={this.state.sessionToken}
            color={this.state.color} bordercolor={this.state.bordercolor} fSize={this.state.fSize} />

          <button onClick={() => this.clickLogout()}>Logout</button>

        </div>
      )
    } else {
      return (
        <div>
          <b>Don't be a loser, be a user.</b>
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
      // <div>
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
          <input style={pStyle} name="backgroundcolor" value={this.state.color} onChange={this.changeColor.bind(this)} />
          <br />
          <br />
          <p style={pStyle}>Set border, example: 20px solid blue</p>
          <input style={pStyle} name="borderColor" value={this.state.bordercolor} onChange={this.changeBorder.bind(this)} />
          <br />
          <br />
          <p style={pStyle}>Set font size, for example: 15px</p>
          <input style={pStyle} name="fontsize" value={this.state.fSize} onChange={this.changefSize.bind(this)} />
          <br />
          {/* {this.protectedViews()} */}
        </div>
        {this.protectedViews()}
      </div>
      // </div>
    )
  }
}

export default ReactInStyle;