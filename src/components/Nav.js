import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Form from 'react-bootstrap/Form';

class Nav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modalShow: false,
            account: "",
            password: ""
        };
    }
    handleClose = () => this.setState({ modalShow: false });
    handleShow = () => this.setState({ modalShow: true });

    handleAccountChange = (e) => this.setState({ account: e.target.value });
    handlePasswordChange = (e) => this.setState({ password: e.target.value });

    logIn = () => {
        console.log(this.state.account);
        console.log(this.state.password);
        this.props.logIn(this.state.account, this.state.password);
    }

    render() {
        // Sign in modal controls

        let logged = <div></div>;
        if (this.props.loggedIn === true) {
            logged = <div>{this.props.account}</div>
        } else {
            logged = <Button className="btn btn-success" style={{ float: "right" }} onClick={this.handleShow}>Log In</Button>
        }

        if (this.props.page === 0) {
            return (
                <div>
                    <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active"><a className="nav-link" onClick={this.props.setPage0}>Home</a></li>
                            <li className="nav-item"><a className="nav-link" onClick={this.props.setPage3}>Contacts</a></li>
                            <li className="nav-item"><a className="nav-link" onClick={this.props.setPage2}>Forms</a></li>
                            <li className="nav-item"><a className="nav-link" onClick={this.props.setPage1}>Info</a></li>
                        </ul>
                        {logged}
                    </nav>
                    <Modal show={this.state.modalShow} onHide={this.handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Log In</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>

                            <Form.Group controlId="formBasicEmail">
                                <Form.Label >Email address</Form.Label>
                                <Form.Control placeholder="Enter email" onChange={this.handleAccountChange} value={this.state.account} />
                                <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                    </Form.Text>
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control placeholder="Password" onChange={this.handlePasswordChange} value={this.state.password} />
                            </Form.Group>
                            <Button variant="success" type="submit" onClick={this.logIn}>
                                Log In
                            </Button>

                        </Modal.Body>
                        <Modal.Footer>

                        </Modal.Footer>
                    </Modal>
                </div>
            )
        } else if (this.props.page === 1) {
            return (
                <div>
                    <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item"><a className="nav-link" onClick={this.props.setPage0}>Home</a></li>
                            <li className="nav-item"><a className="nav-link" onClick={this.props.setPage3}>Contacts</a></li>
                            <li className="nav-item"><a className="nav-link" onClick={this.props.setPage2}>Forms</a></li>
                            <li className="nav-item active"><a className="nav-link" onClick={this.props.setPage1}>Info</a></li>
                        </ul>
                        {logged}
                    </nav>
                    <Modal show={this.state.modalShow} onHide={this.handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Modal heading</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={this.handleClose}>
                                Close
                  </Button>
                            <Button variant="primary" onClick={this.handleClose}>
                                Save Changes
                  </Button>
                        </Modal.Footer>
                    </Modal>
                </div>
            )
        } else if (this.props.page === 2) {
            return (
                <div>
                    <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item"><a className="nav-link" onClick={this.props.setPage0}>Home</a></li>
                            <li className="nav-item"><a className="nav-link" onClick={this.props.setPage3}>Contacts</a></li>
                            <li className="nav-item active"><a className="nav-link" onClick={this.props.setPage2}>Forms</a></li>
                            <li className="nav-item"><a className="nav-link" onClick={this.props.setPage1}>Info</a></li>
                        </ul>
                        {logged}
                    </nav>
                    <Modal show={this.state.modalShow} onHide={this.handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Modal heading</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={this.handleClose}>
                                Close
                  </Button>
                            <Button variant="primary" onClick={this.handleClose}>
                                Save Changes
                  </Button>
                        </Modal.Footer>
                    </Modal>
                </div>
            )
        } else if (this.props.page === 3) {
            return (
                <div>
                    <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item"><a className="nav-link" onClick={this.props.setPage0}>Home</a></li>
                            <li className="nav-item active"><a className="nav-link" onClick={this.props.setPage3}>Contacts</a></li>
                            <li className="nav-item"><a className="nav-link" onClick={this.props.setPage2}>Forms</a></li>
                            <li className="nav-item"><a className="nav-link" onClick={this.props.setPage1}>Info</a></li>
                        </ul>
                        {logged}
                    </nav>
                    <Modal show={this.state.modalShow} onHide={this.handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Modal heading</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={this.handleClose}>
                                Close
                  </Button>
                            <Button variant="primary" onClick={this.handleClose}>
                                Save Changes
                  </Button>
                        </Modal.Footer>
                    </Modal>
                </div>
            )
        }

    }
}

export default Nav;