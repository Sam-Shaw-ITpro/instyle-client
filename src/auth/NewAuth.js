import React from 'react';
import NSignup from './NSignup';
import NLogin from './NLogin';
import '../index.css';


const NewAuth = (props) => {
    return (
        <div>
             <NSignup setToken={props.setToken} />
             <NLogin setToken={props.setToken} />
             </div>
     )
}
export default NewAuth;