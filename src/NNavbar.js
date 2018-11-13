import React from 'react';
import './index.css';

class NNavbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        sessionToken: ''
    };
  }

  render() {
 return (
  
    <div className="nbar">
    <img src={ require('./assets/s.gif')} alt="logo" height="100" width="100" />
  <big>React inStyle</big>
      </div>
  )
}
}
export default NNavbar;
