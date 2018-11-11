import React, { Component } from 'react';
import './index.css';
import NNavbar from './NNavbar';
import Footer from './Footer';
import ReactInStyle from './reactInStyle';
// import {
//   BrowserRouter as Router,
//   Route,
//   Switch
// } from 'react-router-dom';

class App extends Component {

  render() {
    return (
      <div>
           {/* <NNavbar setToken={this.setSessionState} /> */}
           <NNavbar />
        <ReactInStyle/>
      </div>
    );
  }
}

export default App;