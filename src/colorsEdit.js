import React from 'react';
import { Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody } from 'reactstrap';

class ColorsEdit extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            id: "",
            color: "",
            bordercolor: "",
            fSize: ""
        };
    }
    componentWillMount() {
        this.setState({
            id: this.props.savedColor.id,
            color: this.props.savedColor.color,
            bordercolor: this.props.savedColor.bordercolor,
            fSize: this.props.savedColor.fSize
        })
    }
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    handleSubmit = (event) => {
        event.preventDefault();
        this.props.update(event, this.state)
    }

    render() {
        return (
            <div>
                <Modal isOpen={true} >
                    <ModalHeader >UPDATE A COLOR</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleSubmit} >
                            <FormGroup>
                                <Label for="color">BackGround Color</Label>
                                <Input id="color" type="text" name="color" value={this.state.color} placeholder="enter color" onChange={this.handleChange} />
                            </FormGroup>
                            <FormGroup>
                                <Label for="bordercolor">bordercolor</Label>
                                <Input type="text" name="bordercolor" id="bordercolor" value={this.state.bordercolor} onChange={this.handleChange} placeholder="xzcxzcxz">
                                            </Input>
                            </FormGroup>
                            <FormGroup>
                                <Label for="fSize">fSize</Label>
                                <Input id="fSize" type="text" name="fSize" value={this.state.fSize} placeholder="czxczcxz" onChange={this.handleChange} />
                            </FormGroup>
                            <Button type="submit" color="primary"> Submit </Button>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        )
    }
}
export default ColorsEdit;