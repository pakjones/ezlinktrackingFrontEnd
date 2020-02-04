import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Form from 'react-bootstrap/Form';
import LogIn from './LogIn';

class Nav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modalShow: false,
            account: "",
            password: "",
            pages: ["", "", "", ""]
        };
    }
    handleClose = () => this.setState({ modalShow: false });
    handleShow = () => this.setState({ modalShow: true });

    handleAccountChange = (e) => this.setState({ account: e.target.value });
    handlePasswordChange = (e) => this.setState({ password: e.target.value });

    logIn = () => {
        console.log(this.state.account);
        console.log(this.state.password);
        this.props.logIn(this.state.account, this.state.password, this.props.setLoggedIn);
    }

    setPage = (page) => {

        for (let i = 0; i < this.state.pages.length; i++) {
            if (page === i) {
                this.state.pages[i] = "nav-item active";
            } else {
                this.state.pages[i] = "nav-item";
            }
        }
    }

    render() {
        // Sign in modal controls

        this.setPage(this.props.page);

        let logged = <div></div>;
        if (this.props.loggedIn === true) {
            logged = <div>{this.props.account}</div>
        } else {
            logged = <Button className="btn btn-success" style={{ float: "right" }} onClick={this.handleShow}>Log In</Button>
        }

        return (
            <div>
                <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                    <ul className="navbar-nav mr-auto">
                        <li className={this.state.pages[0]}><a className="nav-link" onClick={this.props.setPage0}>Home</a></li>
                        <li className={this.state.pages[3]}><a className="nav-link" onClick={this.props.setPage3}>Contacts</a></li>
                        <li className={this.state.pages[2]}><a className="nav-link" onClick={this.props.setPage2}>Forms</a></li>
                        <li className={this.state.pages[1]}><a className="nav-link" onClick={this.props.setPage1}>Info</a></li>
                    </ul>
                    {logged}
                </nav>

                <LogIn modalShow={this.state.modalShow}
                    handleClose={this.handleClose}
                    handleAccountChange={this.handleAccountChange}
                    handlePasswordChange={this.handlePasswordChange}
                    account={this.state.account}
                    password={this.state.password}
                    setLoggedIn={this.props.setLoggedIn} />

            </div>
        )

    }
}

export default Nav;