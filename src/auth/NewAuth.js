import React from 'react';
import { Container, Row, Col, Table, Button } from 'reactstrap';
import NSignup from './NSignup';
import NLogin from './NLogin';
import '../index.css';


const NewAuth = (props) => {
    return (
 
            <NSignup setToken={props.setToken} />
 
    )
}
export default NewAuth;

