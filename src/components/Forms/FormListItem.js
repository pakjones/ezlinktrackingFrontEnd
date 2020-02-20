import React from 'react';
import Button from 'react-bootstrap/Button';

class FormListItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    selectForm = () => {
        this.props.setSelectedForm(this.props.index);
    }

    render() {
        return (
            <div>
                <span>{this.props.form.name}</span>
                <Button variant="info" onClick={this.selectForm}>Edit</Button>
            </div>
        )
    }
}

export default FormListItem;