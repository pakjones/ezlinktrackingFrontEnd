import React from 'react';

class FormListItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <div>
                <span>{this.props.form.name}</span>
            </div>
        )
    }
}

export default FormListItem;