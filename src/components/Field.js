import React from 'react';
import Card from 'react-bootstrap/Card';
import Dropdown from 'react-bootstrap/Dropdown';

class Field extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    deleteField = () => {
        console.log("trying");
        let payload = {
            index: this.props.index,
            action: "delete"
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
                        <div className="container">
                            <div className="row">
                                <div className="col-md-8">
                                    {this.props.index + 1}
                                    {this.props.field}

                                </div>
                                <div className="col-md-4" style={optionsStyle}>
                                    <Dropdown>
                                        <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                                            Options
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu>
                                            <Dropdown.Item onClick={this.deleteField} id="name">Delete</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </div>
                            </div>
                        </div>
                    </Card.Body>
                </Card>


            </li>
        );
    }
}

export default Field;