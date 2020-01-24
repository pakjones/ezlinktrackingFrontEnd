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
            activeField: 0,
            ssModalShow: false,
            ezlModalShow: false,
            ssEmbed: "",
            ssURI: "",
            ssEndPoint: "",
            formAction: "",
            embedCode: null,
        };
    }

    setActiveField = (index) => {
        this.setState({ activeField: index });
    }

    updateFields = (payload) => {
        if (payload.action === "delete") {
            let newFields = this.state.fields;
            newFields.splice(payload.index, 1);
            this.setState({ fields: newFields, activeField: null });
        }
        else if (payload.action === "moveUp") {
            console.log("Trying to move up");
            if (payload.index > 0) {
                // Swap this.state.fields[payload.index] with this.state.fields[payload.index - 1]
                let fields2 = this.state.fields;

                let temp = fields2[payload.index];

                fields2[payload.index] = fields2[payload.index - 1];
                fields2[payload.index - 1] = temp;

                this.setState({ fields: fields2, activeField: this.state.activeField - 1 });
            }
        } else if (payload.action === "moveDown") {
            console.log("Trying to move down");
            if (payload.index < this.state.fields.length - 1) {
                // Swap this.state.fields[payload.index] with this.state.fields[payload.index + 1]
                let fields2 = this.state.fields;

                let temp = fields2[payload.index];

                fields2[payload.index] = fields2[payload.index + 1];
                fields2[payload.index + 1] = temp;

                this.setState({ fields: fields2, activeField: this.state.activeField + 1 });
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
        } else if (payload.action === "textShadowToggle") {
            let temp = this.state.fields;
            temp[payload.index].style.textShadow.enabled = payload.value;
            this.setState({ fields: temp });
        } else if (payload.action === "fieldShadowToggle") {
            let temp = this.state.fields;
            temp[payload.index].style.fieldShadow.enabled = payload.value;
            this.setState({ fields: temp });
        } else if (payload.action === "setTextShadowRight") {
            let temp = this.state.fields;
            temp[payload.index].style.textShadow.right = payload.value;
            this.setState({ fields: temp });
        } else if (payload.action === "setTextShadowDown") {
            let temp = this.state.fields;
            temp[payload.index].style.textShadow.down = payload.value;
            this.setState({ fields: temp });
        } else if (payload.action === "setTextShadowBlur") {
            let temp = this.state.fields;
            temp[payload.index].style.textShadow.blur = payload.value;
            this.setState({ fields: temp });
        } else if (payload.action === "setTextShadowColor") {
            let temp = this.state.fields;
            temp[payload.index].style.textShadow.color = payload.value;
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
                marginTop: 0,
                fieldShadow: {
                    enabled: false,
                    right: 0,
                    down: 0,
                    blur: 0,
                    color: "grey",
                },
                textShadow: {
                    enabled: false,
                    right: 0,
                    down: 0,
                    blur: 0,
                    color: "grey",
                }
            }
        };

        if (type.name === "button") {
            type.label = "Submit";
        }

        let newFields = this.state.fields;
        newFields.push(type);
        this.setState({ fields: newFields, activeField: this.state.fields.length - 1 });
    }

    // Modal functions
    handleSSShow = () => { this.setState({ ssModalShow: true }) }
    handleSSClose = () => { this.setState({ ssModalShow: false }) }

    ezlHandleShow = () => {
        this.createEmbedCode();
        this.setState({ ezlModalShow: true });

    }
    ezlHandleClose = () => { this.setState({ ezlModalShow: false }) }

    ssEmbedChange = (e) => {
        this.setState({ ssEmbed: e.target.value });
    }

    createEmbedCode = () => {
        // Parse and make the embed code
        // Make the SharpSpring POST endpoint

        let SSbaseURI;
        let SSendpoint;

        if (this.state.ssEmbed !== "") {
            let parsed = this.state.ssEmbed.toString().split("'");
            console.log(parsed);
            SSbaseURI = parsed[3];
            SSendpoint = parsed[7];
        }

        let endpoint = "test";

        if (SSbaseURI && SSendpoint) {
            endpoint = SSbaseURI + "" + SSendpoint + "" + "/jsonp/";
        }

        // Make the form
        let form = "";
        form += "<form action='" + endpoint + "'>"

        // Add fields to string
        for (let i = 0; i < this.state.fields.length; i++) {
            //console.log(this.state.fields[i]);
            let field = this.state.fields[i];
            if (field.name === "textInput" || field.name === "email") {
                form += "<li style='width: " + field.style.width + "%; display: " + field.style.display + "; margin-top: " + field.style.marginTop + "px;'>"
                form += "<div>";
                form += "<div style='width: 100%;'>";
                form += "<div style='width: 100%; text-align: " + field.style.textAlign + ";'>"
                form += "<label style='text-shadow:" + field.style.textShadow.right + "px "
                    + field.style.textShadow.down + "px "
                    + field.style.textShadow.blur + "px "
                    + field.style.textShadow.color +
                    "'>" + field.label + "</label>";
                form += "<div style='width: 100%;'><input name='" + field.label + "' placeholder='" + field.placeholder + "' style='width: 100%;'></div>";
                form += "</div>";
                form += "</div>";
                form += "</div>";
                form += "</li>";
            } else if (field.name === "button") {
                form += "<div style='width: " + field.style.width + "%; display: " + field.style.display + "; text-align: " + field.style.textAling + "; margin-top: " + field.style.marginTop + "px;'>";
                form += "<input type='submit' value='" + field.label + "'>";
                form += "</div>";
            }

        }

        form += "</form>";
        form += '<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css">';

        this.setState({ embedCode: form });
    }

    modalSave = () => {

        this.setState({ ssModalShow: false });

        this.createEmbedCode();

    }

    render() {
        return (
            <div className="container">
                <br />
                <div className="row">
                    <div className="col-md-4" style={{ textAlign: "left" }}>
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
                    <div className="col-md-4" style={{ textAlign: "center" }}>
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
                    <div className="col-md-4" style={{ textAlign: "right" }}>
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
                                    <FormControl as="textarea" aria-label="With textarea" value={this.state.embedCode} readOnly />
                                </InputGroup>

                            </Modal.Body>
                        </Modal>
                    </div>
                </div>
                <br />
                <div className="row" style={{ marginLeft: '0px', paddingLeft: '0px' }}>
                    <div className="col-md-6" style={{ padding: "0px" }}>
                        <Fields fields={this.state.fields} activeField={this.state.activeField} updateFields={this.updateFields} />
                    </div>
                    <div className="col-md-6">
                        <FieldsPreview fields={this.state.fields} activeField={this.state.activeField} setActiveField={this.setActiveField} />
                    </div>
                </div>
            </div>
        );
    }
}

export default Forms;