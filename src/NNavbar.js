import React from 'react';
// import {Link} from 'react-router-dom';
import './index.css';
import NewAuth from './auth/NewAuth'
import Auth from './auth/Auth'


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
