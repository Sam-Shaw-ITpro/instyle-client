import React from 'react'
import ReactDOM from 'react-dom';
import { Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal } from 'reactstrap';
import { Button } from 'reactstrap';
import '../index.css';

class Signinmodel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sessionToken: ''
        };
    }

    render() {
 
        return (
            <div>
                {/* <Button color="secondary" size="lg">Login/Register</Button>{' '}   */}

                <div class="modal fade" id="myModal" role="dialog">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <button type="button" class="close" data-dismiss="Modal">&times;</button>
                                <h4 class="modal-title">Modal Header</h4>
                            </div>
                            <div class="modal-body">
                                <p>Some text in the modal.</p>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        )
    }
}

export default Signinmodel;


