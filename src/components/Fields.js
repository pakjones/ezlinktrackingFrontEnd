import React from 'react';
import Field from './Field';

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
                array.push(<Field field={this.props.fields[i]} key={i} index={i} update={this.updateFields} />);
            }
            return (
                <ul id="fieldsList" style={{ paddingLeft: "0px" }}>
                    {array}
                </ul>
            )

        } else {
            return (
                <div></div>
            )
        }

    }
}

export default Fields;