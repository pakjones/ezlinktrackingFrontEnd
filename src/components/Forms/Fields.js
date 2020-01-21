import React from 'react';
import Field from './Field';
import FieldButton from './FieldButton';
import ListGroup from 'react-bootstrap/ListGroup';

class Fields extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    updateFields = (payload) => {
        this.props.updateFields(payload);
    }

    render() {
        if (this.props.fields.length > 0) {
            let array = [];
            let display = "";
            /* OLD FIELDS DISPLAY
            for (let i = 0; i < this.props.fields.length; i++) {
                if (this.props.fields[i].name === "textInput" || this.props.fields[i].name === "email") {
                    array.push(<ListGroup.Item key={i}><Field field={this.props.fields[i]} key={i} index={i} update={this.updateFields} /></ListGroup.Item>);
                } else if (this.props.fields[i].name === "button") {
                    array.push(<ListGroup.Item key={i}><FieldButton field={this.props.fields[i]} key={i} index={i} update={this.updateFields} /></ListGroup.Item>);
                }
            }
            */
            if (this.props.fields[this.props.activeField].name === "textInput" || this.props.fields[this.props.activeField].name === "email") {
                display = <ListGroup.Item key={this.props.activeField}><Field field={this.props.fields[this.props.activeField]} key={this.props.activeField} index={this.props.activeField} update={this.updateFields} /></ListGroup.Item>;
            } else if (this.props.fields[this.props.activeField].name === "button") {
                display = <ListGroup.Item key={this.props.activeField}><FieldButton field={this.props.fields[this.props.activeField]} key={this.props.activeField} index={this.props.activeField} update={this.updateFields} /></ListGroup.Item>;
            }
            return (
                <ListGroup style={{ paddingLeft: "0px" }} variant="flush">
                    {//array
                        display
                    }
                </ListGroup>
            )

        } else {
            return (
                <div></div>
            )
        }

    }
}

export default Fields;