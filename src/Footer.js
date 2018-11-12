import React from 'react';
// import Login from '../src/auth/Login';
// import Signup from '../src/auth/Signup';
import './index.css';

class Footer extends React.Component {
// export default class Footer extends Component {
  constructor() {
    super();
    this.state = {
      isUser: false
    }
  }

  changeUserStatus = () => this.setState({ isUser: !this.state.isUser })

  authViewShow = () => {
    if (this.state.isUser) {
      return (
        <p>in footer</p>
      )
    } else {
      return (
        <Signup toggleForm={ this.changeUserStatus }/>
      )
    }
  }

  render() {
    return (
      <footerdiv>
        <p>in footer</p>
        {/* { this.authViewShow() } */}
      </footerdiv>
    );
  }
}

export default Footer;