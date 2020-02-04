import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Form from 'react-bootstrap/Form';
import Spinner from 'react-bootstrap/Spinner';

const axios = require('axios');

class LogIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modalShow: false,
            account: "",
            password: "",
            button: <Button variant="success" type="submit" onClick={this.logInHandler}>Log In</Button>
        };
    }
    handleClose = () => this.setState({ modalShow: false });
    handleShow = () => this.setState({ modalShow: true });

    handleAccountChange = (e) => this.setState({ account: e.target.value });
    handlePasswordChange = (e) => this.setState({ password: e.target.value });

    logInHandler = () => {
        this.logIn(this.props.setLoggedIn, this.setButton, this.props.handleClose);
    }

    setButton = (type) => {
        if (type === "login") {
            this.state.setState({ button: <Button variant="success" type="submit" onClick={this.logInHandler}>Log In</Button> })
        } else if (type === "loading") {
            this.setState({
                button: <Button variant="success" disabled>
                    <Spinner
                        as="span"
                        animation="border"
                        size="sm"
                        role="status"
                        aria-hidden="true"
                    />
                    <span className="sr-only">Loading...</span>
                </Button>
            })
        } else if (type === "logout") {
            this.setState({ button: <Button variant="danger" type="submit" >Log Out</Button> })
        }
    }

    logIn = (setLoggedIn, setButton, close) => {
        let url = 'http://app.okrana.icu/account/login';

        setButton("loading");

        axios.post(url, {
            "email": this.props.account,
            "password": this.props.password
        })
            .then(function (response) {
                console.log(response);
                if (response.status === 200) {
                    setLoggedIn(true);
                    close();
                }
            })
            .catch(function (error) {
                console.log(error);
                setButton("login");
            });
    }

    render() {

        return (
            <Modal show={this.props.modalShow} onHide={this.props.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Log In</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <Form.Group controlId="formBasicEmail">
                        <Form.Label >Email address</Form.Label>
                        <Form.Control placeholder="Enter email" onChange={this.props.handleAccountChange} value={this.props.account} />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control placeholder="Password" onChange={this.props.handlePasswordChange} value={this.props.password} />
                    </Form.Group>

                    {this.state.button}

                </Modal.Body>
                <Modal.Footer>

                </Modal.Footer>
            </Modal >
        )

    }
}

export default LogIn;