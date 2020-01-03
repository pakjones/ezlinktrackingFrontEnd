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
                            </Tab>
                        </Tabs>
                    </Card.Body>
                </Card>


            </li>
        );
    }
}

export default Field;