import React, { Component } from 'react';
import './index.css';
import NNavbar from './NNavbar';
import ReactInStyle from './reactInStyle';

class App extends Component {

  render() {
    return (
      <div>
        <NNavbar />
        <ReactInStyle />
      </div>
    );
  }
}

export default App;