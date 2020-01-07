import React from 'react';
import Field from './Field';
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
            for (let i = 0; i < this.props.fields.length; i++) {
                array.push(<ListGroup.Item><Field field={this.props.fields[i]} key={i} index={i} update={this.updateFields} /></ListGroup.Item>);
            }
            return (
                <ListGroup style={{ paddingLeft: "0px" }} variant="flush">
                    {array}
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