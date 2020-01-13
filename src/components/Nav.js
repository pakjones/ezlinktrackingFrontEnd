import React from 'react';

class Nav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        if (this.props.page === 0) {
            return (
                <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                    <ul className="navbar-nav">
                        <li className="nav-item active"><a className="nav-link" onClick={this.props.setPage0}>Home</a></li>
                        <li className="nav-item"><a className="nav-link" onClick={this.props.setPage2}>Forms</a></li>
                        <li className="nav-item"><a className="nav-link" onClick={this.props.setPage1}>Info</a></li>
                    </ul>
                </nav>
            )
        } else if (this.props.page === 1) {
            return (
                <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                    <ul className="navbar-nav">
                        <li className="nav-item"><a className="nav-link" onClick={this.props.setPage0}>Home</a></li>
                        <li className="nav-item"><a className="nav-link" onClick={this.props.setPage2}>Forms</a></li>
                        <li className="nav-item active"><a className="nav-link" onClick={this.props.setPage1}>Info</a></li>
                    </ul>
                </nav>
            )
        } else if (this.props.page === 2) {
            return (
                <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                    <ul className="navbar-nav">
                        <li className="nav-item"><a className="nav-link" onClick={this.props.setPage0}>Home</a></li>
                        <li className="nav-item active"><a className="nav-link" onClick={this.props.setPage2}>Forms</a></li>
                        <li className="nav-item"><a className="nav-link" onClick={this.props.setPage1}>Info</a></li>
                    </ul>
                </nav>
            )
        }

    }
}

export default Nav;