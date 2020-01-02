import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import Fields from './Fields';

class Forms extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fields: [],
        };
    }

    updateFields = (payload) => {
        if (payload.action === "delete") {
            let newFields = this.state.fields;
            newFields.splice(payload.index, 1);
            this.setState({ fields: newFields });
        }
    }

    newField = (e) => {
        let type = e.target.id;
        let newFields = this.state.fields;
        newFields.push(type);
        this.setState({ fields: newFields });
    }

    render() {
        return (
            <div className="container">
                <br />
                <div className="row">
                    <div className="col-md-12">
                        <Dropdown>
                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                Add Field
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item onClick={this.newField} id="name">Name</Dropdown.Item>
                                <Dropdown.Item onClick={this.newField} id="email">Email</Dropdown.Item>
                                <Dropdown.Item onClick={this.newField} id="else">Something else</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                </div>
                <br />
                <div className="row" style={{ marginLeft: '0px;', border: 'solid 1px black;' }}>
                    <div className="col-md-6">
                        <Fields fields={this.state.fields} updateFields={this.updateFields} />
                    </div>
                    <div className="col-md-6">

                    </div>
                </div>
            </div>
        );
    }
}

export default Forms;