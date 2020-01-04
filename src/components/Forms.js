import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import Fields from './Fields';
import FieldsPreview from './FieldsPreview';

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
        } else if (payload.action === "setWidth") {
            let temp = this.state.fields;
            temp[payload.index].style.width = payload.value;
            this.setState({ fields: temp });
        } else if (payload.action === "setDisplay") {
            let temp = this.state.fields;
            temp[payload.index].style.display = payload.value;
            this.setState({ fields: temp });
        }
    }

    newField = (e) => {
        let type = {
            name: e.target.id,
            style: {
                width: 100,
                display: "block"
            }
        };
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