import React from 'react';
import FieldPreview from './FieldPreview';

class FieldsPreview extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        if (this.props.fields.length > 0) {
            console.log(this.props.fields.length);
            let array = [];
            for (let i = 0; i < this.props.fields.length; i++) {
                array.push(<FieldPreview field={this.props.fields[i]} key={i} index={i} />);
            }
            return (
                <ul id="fieldsList">
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

export default FieldsPreview;