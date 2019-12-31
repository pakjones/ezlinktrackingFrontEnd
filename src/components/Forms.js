import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';

class Forms extends React.Component {
    render() {
        return (
            <div className="container" id="docsContainer">
                <div className="row">
                    <div className="col-md-6">
                        <div className="row">
                            <Dropdown>
                                <Dropdown.Toggle variant="success" id="dropdown-basic">
                                    Add Field
                            </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1">Name</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">Email</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                    </div>
                    <div className="col-md-6"></div>
                </div>
            </div>
        );
    }
}

export default Forms;