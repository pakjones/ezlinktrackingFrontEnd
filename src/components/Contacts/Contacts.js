import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Contact from './Contact';
import ListGroupItem from 'react-bootstrap/ListGroupItem';

class Contacts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        if (this.props.contacts && this.props.contacts.length > 0) {
            let array = [];

            for (let i = 0; i < this.props.contacts.length; i++) {
                array.push(<ListGroup.Item key={i}><Contact contact={this.props.contacts[i]} key={i} /></ListGroup.Item>)
            }

            return (
                <ListGroup style={{ padding: "0px" }} variant="flush">
                    {
                        array
                    }
                    <ListGroupItem></ListGroupItem>
                </ListGroup>
            )

        } else {
            return (
                <div></div>
            )
        }

    }
}

export default Contacts;