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
  <big>React inStyle</big>
      </div>
  )
}
}
export default NNavbar;
