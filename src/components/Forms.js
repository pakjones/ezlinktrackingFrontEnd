import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import Fields from './Fields';
import FieldsPreview from './FieldsPreview';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';

class Forms extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fields: [],
            ssModalShow: false,
            ezlModalShow: false,
            ssEmbedDraft: "",
            ssEmbedSaved: "",
            ssURI: "",
            ssEndPoint: "",
            fullSSEndpoint: ""
        };
    }

    updateFields = (payload) => {
        if (payload.action === "delete") {
            let newFields = this.state.fields;
            newFields.splice(payload.index, 1);
            this.setState({ fields: newFields });
        }
        else if (payload.action === "moveUp") {
            console.log("Trying to move up");
            if (payload.index > 0) {
                // Swap this.state.fields[payload.index] with this.state.fields[payload.index - 1]
                let fields2 = this.state.fields;

                let temp = fields2[payload.index];

                fields2[payload.index] = fields2[payload.index - 1];
                fields2[payload.index - 1] = temp;

                this.setState({ fields: fields2 });
            }
        } else if (payload.action === "moveDown") {
            console.log("Trying to move down");
            if (payload.index < this.state.fields.length - 1) {
                // Swap this.state.fields[payload.index] with this.state.fields[payload.index + 1]
                let fields2 = this.state.fields;

                let temp = fields2[payload.index];

                fields2[payload.index] = fields2[payload.index + 1];
                fields2[payload.index + 1] = temp;

                this.setState({ fields: fields2 });
            }
        } else if (payload.action === "setLabel") {
            let temp = this.state.fields;
            temp[payload.index].label = payload.value;
            this.setState({ fields: temp });
        } else if (payload.action === "setPlaceholder") {
            let temp = this.state.fields;
            temp[payload.index].placeholder = payload.value;
            this.setState({ fields: temp });
        } else if (payload.action === "setWidth") {
            let temp = this.state.fields;
            temp[payload.index].style.width = payload.value;
            this.setState({ fields: temp });
        } else if (payload.action === "setDisplay") {
            let temp = this.state.fields;
            temp[payload.index].style.display = payload.value;
            this.setState({ fields: temp });
        } else if (payload.action === "setAlign") {
            let temp = this.state.fields;
            temp[payload.index].style.textAlign = payload.value;
            this.setState({ fields: temp });
        } else if (payload.action === "marginTop") {
            let temp = this.state.fields;
            temp[payload.index].style.marginTop = payload.value;
            this.setState({ fields: temp });
        }
    }

    newField = (e) => {
        let type = {
            name: e.target.id,
            label: "Label:",
            placeholder: "",
            style: {
                width: 100,
                display: "block",
                textAlign: "left",
                marginTop: 0
            }
        };
        let newFields = this.state.fields;
        newFields.push(type);
        this.setState({ fields: newFields });
    }

    // Modal functions
    handleSSShow = () => { this.setState({ ssModalShow: true }) }
    handleSSClose = () => { this.setState({ ssModalShow: false }) }

    ezlHandleShow = () => {
        this.setState({ ezlModalShow: true });


    }
    ezlHandleClose = () => { this.setState({ ezlModalShow: false }) }

    ssEmbedChange = (e) => {
        this.setState({ ssEmbedDraft: e.target.value });
    }

    modalSave = () => {
        this.setState({ ssModalShow: false });

        // Parse and make the embed code
        // Make the SharpSpring POST endpoint
        let parsed = this.state.ssEmbedDraft.toString().split("'");
        console.log(parsed);
        let baseURI = parsed[3];
        let endpoint = parsed[7];

        let fullSSEndpoint = baseURI + "" + endpoint + "" + "/jsonp/";

        this.setState({ fullSSEndpoint: fullSSEndpoint });

        // Make the form
        let form = "";
        for (let i = 0; i < this.state.fields.length; i++) {

        }
    }

    render() {
        return (
            <div className="container">
                <br />
                <div className="row">
                    <div className="col-md-3">
                        <Dropdown>
                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                Add Field
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item onClick={this.newField} id="textInput">Text Input</Dropdown.Item>
                                <Dropdown.Item onClick={this.newField} id="email">Email</Dropdown.Item>
                                <Dropdown.Item onClick={this.newField} id="button">Button</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                    <div className="col-md-3">
                        <Button variant="outline-success" onClick={this.handleSSShow}>
                            SharpSpring
                            </Button>

                        <Modal show={this.state.ssModalShow} onHide={this.handleSSClose}>
                            <Modal.Header closeButton>
                                <Modal.Title>SharpSpring Integration</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                Please paste your SharpSpring form embed code below and hit the "save" button.
                                <br />
                                <InputGroup>
                                    <InputGroup.Prepend>
                                        <InputGroup.Text>Embed Code</InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <FormControl as="textarea" aria-label="With textarea" onChange={this.ssEmbedChange} />
                                </InputGroup>

                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="success" onClick={this.modalSave}>
                                    Save
                                </Button>
                            </Modal.Footer>
                        </Modal>
                    </div>
                    <div className="col-md-3">
                        <Button variant="secondary" onClick={this.ezlHandleShow}>
                            Embed Code
                        </Button>
                        <Modal show={this.state.ezlModalShow} onHide={this.ezlHandleClose}>
                            <Modal.Header closeButton>
                                <Modal.Title>Embed Code</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                Paste this embed code on your webpage where you would like the form to appear.
                                <InputGroup>
                                    <InputGroup.Prepend>
                                        <InputGroup.Text>Embed Code</InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <FormControl as="textarea" aria-label="With textarea" value={this.state.fullSSEndpoint} readOnly />
                                </InputGroup>

                            </Modal.Body>
                        </Modal>
                    </div>
                    <div className="col-md-3">
                        <Button variant="success">
                            Save Changes
                        </Button>
                    </div>
                </div>
                <br />
                <div className="row" style={{ marginLeft: '0px', paddingLeft: '0px' }}>
                    <div className="col-md-6">
                        <Fields fields={this.state.fields} updateFields={this.updateFields} />
                    </div>
                    <div className="col-md-6">
                        <FieldsPreview fields={this.state.fields} />
                    </div>
                </div>
            </div>
        );
    }
}

export default Forms;