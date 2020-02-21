import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Contact from './Contact';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import Form from 'react-bootstrap/Form';
import Spinner from 'react-bootstrap/Spinner';

const axios = require('axios');

class Contacts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            newContactName: "",
            newContactEmail: "",
            statusText: "",
            modalShow: false,
            addButtonState: "rest",
            addButton: <Button variant="success" onClick={this.addContactHandler}>Create</Button>
        };
    }

    setButton = (buttonState) => {
        if (buttonState === "rest") {
            this.setState({ addButton: <Button variant="success" onClick={this.addContactHandler}>Create</Button> });
        } else if (buttonState === "loading") {
            this.setState({
                addButton: <Button variant="success" disabled>
                    <Spinner
                        as="span"
                        animation="border"
                        size="sm"
                        role="status"
                        aria-hidden="true"
                    />
                    <span className="sr-only">Loading...</span>
                </Button>
            });
        }
    }

    handleOpen = () => {
        this.setState({ modalShow: true })
    }
    handleClose = () => {
        this.setState({ modalShow: false })
    }

    handleNameChange = (e) => {
        this.setState({ newContactName: e.target.value })
    }
    handleEmailChange = (e) => {
        this.setState({ newContactEmail: e.target.value })
    }

    setStatusText = (text) => {
        this.setState({ statusText: text });
    }

    addContactHandler = () => {
        let payload = {
            account: this.props.account,
            password: this.props.password
        }
        this.addContact(this.setButton, this.handleClose, this.setStatusText, this.props.getAccountInfo)
    }

    addContact = (setButton, handleClose, setStatusText, getAccountInfo) => {
        let url = 'http://app.okrana.icu/contact/create';

        setButton("loading");


        axios.post(url, {
            account: this.props.accountName,
            password: this.props.password,
            contact: {
                email: this.state.newContactEmail,
                name: this.state.newContactName
            }
        })
            .then(function (response) {
                console.log(response);
                if (response.status === 200) {
                    console.log(response.data);
                    setButton("rest");
                    handleClose();
                    getAccountInfo(response.data);
                    return true;
                } else {
                    console.log(response);
                    setButton("rest");
                    setStatusText(response.text);
                    return;
                }
            })
            .catch(function (error) {
                console.log(error.response.data);
                setButton("rest");
                setStatusText(error.response.data);
                return;
            });
    }

    render() {
        if (this.props.loggedIn === true) {
            let array = [];

            if (this.props.contacts) {
                for (let i = 0; i < this.props.contacts.length; i++) {
                    array.push(<ListGroup.Item key={i}><Contact contact={this.props.contacts[i]} key={i} /></ListGroup.Item>)
                }
            }

            return (
                <div>
                    <ListGroup style={{ padding: "0px" }} variant="flush">
                        <ListGroupItem>
                            <Button variant="success" onClick={this.handleOpen}>Add Contact</Button>
                        </ListGroupItem>
                        {
                            array
                        }
                    </ListGroup>
                    <Modal show={this.state.modalShow} onHide={this.handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Add Contact</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>

                            <Form.Group controlId="formBasicName">
                                <Form.Label >Name</Form.Label>
                                <Form.Control placeholder="Contact Name" onChange={this.handleNameChange} value={this.state.newContactName} />
                            </Form.Group>

                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control placeholder="Contact Email" onChange={this.handleEmailChange} value={this.state.newContactEmail} />
                                <p style={{ color: "red" }}>{this.state.statusText}</p>
                            </Form.Group>


                            {this.state.addButton}
                        </Modal.Body>
                    </Modal >
                </div>
            )

        } else {
            return (
                <div></div>
            )
        }

    }
}

export default Contacts;