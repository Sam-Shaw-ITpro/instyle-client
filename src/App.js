import React, { Component } from 'react';
import './index.css';
// import Navbar from './Navbar';
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
        {/* <Navbar/>   lets make this fire in protected view area */}
        <ReactInStyle/>
        {/* <Footer/> */}
      </div>
    );
  }
}

export default App;