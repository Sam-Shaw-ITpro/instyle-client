import React from 'react';
// import {Link} from 'react-router-dom';
import './index.css';
import NewAuth from './auth/NewAuth'


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
 <NewAuth setToken={this.setSessionState}/>
      </div>
  )
}
}
export default NNavbar;
