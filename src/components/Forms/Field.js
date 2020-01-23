import React from 'react';
import Card from 'react-bootstrap/Card';
import Dropdown from 'react-bootstrap/Dropdown';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import DropdownButton from 'react-bootstrap/DropdownButton';
import FormControl from 'react-bootstrap/FormControl';
import InputGroup from 'react-bootstrap/InputGroup';

class Field extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    deleteField = () => {
        console.log("Delete");
        let payload = {
            index: this.props.index,
            action: "delete"
        }
        this.props.update(payload);
    }

    moveFieldUp = () => {
        console.log("MoveUp");
        let payload = {
            index: this.props.index,
            action: "moveUp"
        }
        this.props.update(payload);
    }

    updateLabel = (e) => {
        let payload = {
            index: this.props.index,
            action: "setLabel",
            value: e.target.value.trim()
        }
        this.props.update(payload);
    }

    updatePlaceholder = (e) => {
        let payload = {
            index: this.props.index,
            action: "setPlaceholder",
            value: e.target.value.trim()
        }
        this.props.update(payload);
    }

    moveFieldDown = () => {
        console.log("MoveDown");
        let payload = {
            index: this.props.index,
            action: "moveDown"
        }
        this.props.update(payload);
    }

    updateFieldStyle = (e) => {
        let payload;
        switch (e.target.id) {
            // Width ----------------------------
            case "width25":
                payload = {
                    index: this.props.index,
                    action: "setWidth",
                    value: 25
                }
                break;
            case "width50":
                payload = {
                    index: this.props.index,
                    action: "setWidth",
                    value: 50
                }
                break;
            case "width75":
                payload = {
                    index: this.props.index,
                    action: "setWidth",
                    value: 75
                }
                break;
            case "width100":
                payload = {
                    index: this.props.index,
                    action: "setWidth",
                    value: 100
                }
                break;
            //---------------------------------
            // Display ------------------------
            //---------------------------------
            case "displayBlock":
                payload = {
                    index: this.props.index,
                    action: "setDisplay",
                    value: "block"
                }
                break;
            case "displayInline":
                payload = {
                    index: this.props.index,
                    action: "setDisplay",
                    value: "inline-block"
                }
                break;
            //--------------------------------
            case "alignLeft":
                payload = {
                    index: this.props.index,
                    action: "setAlign",
                    value: "left"
                }
                break;
            case "alignCenter":
                payload = {
                    index: this.props.index,
                    action: "setAlign",
                    value: "center"
                }
                break;
            case "alignRight":
                payload = {
                    index: this.props.index,
                    action: "setAlign",
                    value: "right"
                }
                break;
            //-------------------------------
            case "above0":
                payload = {
                    index: this.props.index,
                    action: "marginTop",
                    value: 0
                }
                break;
            case "above5":
                payload = {
                    index: this.props.index,
                    action: "marginTop",
                    value: 5
                }
                break;
            case "above10":
                payload = {
                    index: this.props.index,
                    action: "marginTop",
                    value: 10
                }
                break;
            case "above15":
                payload = {
                    index: this.props.index,
                    action: "marginTop",
                    value: 15
                }
                break;
        }
        this.props.update(payload);
    }


    render() {

        let optionsStyle = {
            textAlign: 'right'
        }

        return (
            <div>
                <Card>
                    <Card.Body>
                        <div style={{ float: "left" }}>
                            {this.props.index + 1}
                            {this.props.field.name}
                        </div>
                        <Dropdown style={{ float: "right" }}>
                            <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                                Options
                                        </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item onClick={this.moveFieldUp}>Move Up</Dropdown.Item>
                                <Dropdown.Item onClick={this.moveFieldDown}>Move Down</Dropdown.Item>

                                <Dropdown.Divider />

                                <Dropdown.Item onClick={this.deleteField}>Delete</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <br />
                        <Tabs /*defaultActiveKey="Field"*/ id="uncontrolled-tab-example" variant="pills">
                            <Tab eventKey="Field" title="Field">
                                <br />
                                <div className="row">
                                    <InputGroup className="mb-3">
                                        <InputGroup.Prepend>
                                            <InputGroup.Text id="inputGroup-sizing-default">Label</InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <FormControl
                                            aria-label="Default"
                                            aria-describedby="inputGroup-sizing-default"
                                            onChange={this.updateLabel}
                                            placeholder={this.props.field.label}
                                        />
                                    </InputGroup>
                                </div>
                                <div className="row">
                                    <InputGroup className="mb-3">
                                        <InputGroup.Prepend>
                                            <InputGroup.Text id="inputGroup-sizing-default">Placeholder</InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <FormControl
                                            aria-label="Default"
                                            aria-describedby="inputGroup-sizing-default"
                                            onChange={this.updatePlaceholder}
                                            placeholder={this.props.field.placeholder}
                                        />
                                    </InputGroup>
                                </div>
                            </Tab>
                            <Tab eventKey="Style" title="Style">
                                <br />
                                <DropdownButton id="dropdown-basic-button" variant="info" title="Width" style={{ display: "inline-block" }}>
                                    <Dropdown.Item id="width25" href="#/action-1" onClick={this.updateFieldStyle}>25%</Dropdown.Item>
                                    <Dropdown.Item id="width50" href="#/action-2" onClick={this.updateFieldStyle}>50%</Dropdown.Item>
                                    <Dropdown.Item id="width75" href="#/action-3" onClick={this.updateFieldStyle}>75%</Dropdown.Item>
                                    <Dropdown.Item id="width100" href="#/action-3" onClick={this.updateFieldStyle}>100%</Dropdown.Item>
                                </DropdownButton>
                                <div style={{ display: "inline-block" }}>
                                    {this.props.field.style.width}%
                                </div>
                                <br />
                                <br />
                                <DropdownButton id="dropdown-basic-button" variant="info" title="Display" style={{ display: "inline-block" }}>
                                    <Dropdown.Item id="displayBlock" href="#/action-1" onClick={this.updateFieldStyle}>Block</Dropdown.Item>
                                    <Dropdown.Item id="displayInline" href="#/action-2" onClick={this.updateFieldStyle}>Inline</Dropdown.Item>
                                </DropdownButton>
                                <div style={{ display: "inline-block" }}>
                                    {this.props.field.style.display}
                                </div>
                                <br />
                                <br />
                                <DropdownButton id="dropdown-basic-button" variant="info" title="Align" style={{ display: "inline-block" }}>
                                    <Dropdown.Item id="alignLeft" href="#/action-1" onClick={this.updateFieldStyle}>Left</Dropdown.Item>
                                    <Dropdown.Item id="alignCenter" href="#/action-2" onClick={this.updateFieldStyle}>Center</Dropdown.Item>
                                    <Dropdown.Item id="alignRight" href="#/action-2" onClick={this.updateFieldStyle}>Right</Dropdown.Item>
                                </DropdownButton>
                                <div style={{ display: "inline-block" }}>
                                    {this.props.field.style.textAlign}
                                </div>
                                <br />
                                <br />
                                <DropdownButton id="dropdown-basic-button" variant="info" title="Spacing Above" style={{ display: "inline-block" }}>
                                    <Dropdown.Item id="above0" href="#/action-1" onClick={this.updateFieldStyle}>0px</Dropdown.Item>
                                    <Dropdown.Item id="above5" href="#/action-1" onClick={this.updateFieldStyle}>5px</Dropdown.Item>
                                    <Dropdown.Item id="above10" href="#/action-2" onClick={this.updateFieldStyle}>10px</Dropdown.Item>
                                    <Dropdown.Item id="above15" href="#/action-2" onClick={this.updateFieldStyle}>15px</Dropdown.Item>
                                </DropdownButton>
                                <div style={{ display: "inline-block" }}>
                                    {this.props.field.style.marginTop}px
                                </div>
                            </Tab>
                        </Tabs>
                    </Card.Body>
                </Card>


            </div>
        );
    }
}

export default Field;