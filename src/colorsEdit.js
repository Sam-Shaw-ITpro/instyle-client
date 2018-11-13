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
                    <ModalHeader >UPDATE A COLOR SCHEME</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleSubmit} >
                            <FormGroup>
                                <Label for="color">Background Color</Label>
                                <Input id="color" type="text" name="color" value={this.state.color} placeholder="example: red" onChange={this.handleChange} />
                            </FormGroup>
                            <FormGroup>
                                <Label for="bordercolor">Border Specs</Label>
                                <Input type="text" name="bordercolor" id="bordercolor" value={this.state.bordercolor} onChange={this.handleChange} placeholder="example: 10px solid yellow">
                                            </Input>
                            </FormGroup>
                            <FormGroup>
                                <Label for="fSize">Font Size</Label>
                                <Input id="fSize" type="text" name="fSize" value={this.state.fSize} placeholder="example: 20px" onChange={this.handleChange} />
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