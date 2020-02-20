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
            button: <Button variant="success" type="submit" onClick={this.logInHandler}>Log In</Button>,
            create: <Button variant="info" type="submit" style={{ marginLeft: "10px" }} onClick={this.createHandler}>Create</Button>,
            statusText: ""
        };
    }
    handleClose = () => this.setState({ modalShow: false });
    handleShow = () => this.setState({ modalShow: true });

    handleAccountChange = (e) => this.setState({ account: e.target.value });
    handlePasswordChange = (e) => this.setState({ password: e.target.value });

    createHandler = () => {
        if (this.create(this.props.setLoggedIn, this.setButton, this.props.handleClose, this.setStatusText)) {
            this.props.setAccount(this.state.account);
            this.props.setPassword(this.state.password);
        }

    }
    logInHandler = () => {
        if (this.logIn(this.props.setLoggedIn, this.setButton, this.props.handleClose, this.setStatusText) === true) {
            this.props.setAccount(this.state.account);
            this.props.setPassword(this.state.password);
        }
    }

    setStatusText = (text) => {
        this.setState({ statusText: text });
    }

    setCreateButton = (type) => {
        if (type === "login") {
            this.setState({ create: <Button variant="info" type="submit" onClick={this.logInHandler}>Create</Button> })
        } else if (type === "loading") {
            this.setState({
                create: <Button variant="info" disabled>
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
            this.setState({ create: <Button variant="danger" type="submit" >Log Out</Button> })
        }
    }

    setButton = (type) => {
        if (type === "login") {
            this.setState({ button: <Button variant="success" type="submit" onClick={this.logInHandler}>Log In</Button> })
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

    create = (setLoggedIn, setButton, close, setStatusText) => {
        let url = 'http://app.okrana.icu/account';

        setButton("loading");

        axios.post(url, {
            "email": this.props.account,
            "password": this.props.password
        })
            .then(function (response) {
                console.log(response.data);
                if (response.status === 200) {
                    setLoggedIn(true);
                    setButton("login");
                    close();
                    return true;
                } else {
                    console.log(response);
                    setStatusText(response.text);
                    return false;
                }
            })
            .catch(function (error) {
                console.log(error.response.data);
                setButton("login");
                setStatusText(error.response.data);
                return false;
            });
    }

    logIn = (setLoggedIn, setButton, close, setStatusText) => {
        let url = 'http://app.okrana.icu/account/login';

        setButton("loading");

        axios.post(url, {
            "email": this.props.account,
            "password": this.props.password
        })
            .then(function (response) {
                console.log(response);
                if (response.status === 200) {
                    setLoggedIn(true, response.data);
                    console.log(response.data);
                    setButton("login");
                    close();
                    return true;
                } else {
                    setStatusText(response.text);
                    console.log(response);
                    return false;
                }
            })
            .catch(function (error) {
                console.log(error);
                setButton("login");
                setStatusText(error.response.data);
                return false;
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
                        <Form.Control type="password" placeholder="Password" onChange={this.props.handlePasswordChange} value={this.props.password} />
                        <p style={{ color: "red" }}>{this.state.statusText}</p>
                    </Form.Group>

                    {this.state.button}
                    {this.state.create}

                </Modal.Body>
            </Modal >
        )

    }
}

export default LogIn;