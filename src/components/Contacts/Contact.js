import React from 'react';
import Button from 'react-bootstrap/Button';

class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <div>
                <span>{this.props.contact.email}
                </span>
            </div>
        )
    }
}

export default Contact;