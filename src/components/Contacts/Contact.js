import React from 'react';

class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <div>
                <span>{this.props.contact.name}</span>
            </div>
        )
    }
}

export default Contact;