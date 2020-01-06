import React from 'react';

class FieldPreview extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: "start"
        };
    }

    renderInput = () => {
        console.log("renderInput()");
        console.log(this.props.field)

    }

    render() {
        let name;
        let input;
        if (this.props.field.name === "text") {
            name = "Name: ";
            input = <div><input type="text" style={{ width: "100%" }} value={this.props.field.placeholder} readOnly></input></div>
        } else if (this.props.field.name === "email") {
            name = "Email: ";
            input = <div><input type="email" style={{ width: "100%" }} value={this.props.field.placeholder} readOnly></input></div>
        } else if (this.props.field.name === "button") {
            name = "";
            input = <button>Submit</button>
        }
        return (
            <li style={{ width: this.props.field.style.width + "%", display: this.props.field.style.display, marginTop: this.props.field.style.marginTop + "px" }}>
                <div className="container">
                    <div className="row" style={{ width: "100%" }}>
                        <div style={{ width: "100%", textAlign: this.props.field.style.textAlign }}>
                            {
                                this.props.field.label
                            }
                            {
                                input
                            }
                        </div>
                    </div>
                </div>
            </li>
        );
    }
}

export default FieldPreview;