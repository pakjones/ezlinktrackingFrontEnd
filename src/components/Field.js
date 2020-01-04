import React from 'react';
import Card from 'react-bootstrap/Card';
import Dropdown from 'react-bootstrap/Dropdown';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import DropdownButton from 'react-bootstrap/DropdownButton';

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
            <li>
                <Card>
                    <Card.Body>
                        <Tabs defaultActiveKey="Field" id="uncontrolled-tab-example" variant="pills">
                            <Tab eventKey="Field" title="Field">
                                <br />
                                <div className="row">
                                    <div className="col-md-4">
                                        {this.props.index + 1}
                                        {this.props.field.name}
                                    </div>
                                    <div className="col-md-4">

                                    </div>
                                    <div className="col-md-4" style={optionsStyle}>
                                        <Dropdown>
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
                                    </div>
                                </div>
                            </Tab>
                            <Tab eventKey="Style" title="Style">
                                <br />
                                Width: {this.props.field.style.width}
                                <DropdownButton id="dropdown-basic-button" variant="info" title="Width">
                                    <Dropdown.Item id="width25" href="#/action-1" onClick={this.updateFieldStyle}>25%</Dropdown.Item>
                                    <Dropdown.Item id="width50" href="#/action-2" onClick={this.updateFieldStyle}>50%</Dropdown.Item>
                                    <Dropdown.Item id="width75" href="#/action-3" onClick={this.updateFieldStyle}>75%</Dropdown.Item>
                                    <Dropdown.Item id="width100" href="#/action-3" onClick={this.updateFieldStyle}>100%</Dropdown.Item>
                                </DropdownButton>
                                <br />
                                Display: {this.props.field.style.display}
                                <DropdownButton id="dropdown-basic-button" variant="info" title="Width">
                                    <Dropdown.Item id="displayBlock" href="#/action-1" onClick={this.updateFieldStyle}>Block</Dropdown.Item>
                                    <Dropdown.Item id="displayInline" href="#/action-2" onClick={this.updateFieldStyle}>Inline</Dropdown.Item>
                                </DropdownButton>
                                <br />
                                Align: {this.props.field.style.textAlign}
                                <DropdownButton id="dropdown-basic-button" variant="info" title="Width">
                                    <Dropdown.Item id="alignLeft" href="#/action-1" onClick={this.updateFieldStyle}>Left</Dropdown.Item>
                                    <Dropdown.Item id="alignCenter" href="#/action-2" onClick={this.updateFieldStyle}>Center</Dropdown.Item>
                                    <Dropdown.Item id="alignRight" href="#/action-2" onClick={this.updateFieldStyle}>Right</Dropdown.Item>
                                </DropdownButton>
                                <br />
                                Spacing Above: {this.props.field.style.marginTop}px
                                <DropdownButton id="dropdown-basic-button" variant="info" title="Width">
                                    <Dropdown.Item id="above0" href="#/action-1" onClick={this.updateFieldStyle}>0px</Dropdown.Item>
                                    <Dropdown.Item id="above5" href="#/action-1" onClick={this.updateFieldStyle}>5px</Dropdown.Item>
                                    <Dropdown.Item id="above10" href="#/action-2" onClick={this.updateFieldStyle}>10px</Dropdown.Item>
                                    <Dropdown.Item id="above15" href="#/action-2" onClick={this.updateFieldStyle}>15px</Dropdown.Item>
                                </DropdownButton>
                            </Tab>
                        </Tabs>
                    </Card.Body>
                </Card>


            </li>
        );
    }
}

export default Field;