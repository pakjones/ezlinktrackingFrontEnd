import React from 'react';

class FieldPreview extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: "start",
            hover: false,
            backgroundColor: "none",
            border: ""
        };
    }

    renderInput = () => {
        console.log("renderInput()");
        console.log(this.props.field)

    }

    click = () => {
        if (this.props.activeField !== this.props.index) {
            this.props.setActiveField(this.props.index);
        } else {
            this.props.setActiveField(null);
        }

    }

    offHover = () => {
        if (this.props.index !== this.props.activeField) {
            //this.setState({ backgroundColor: "" });
            this.setState({ border: "" });
        }
    }
    onHover = () => {
        if (this.props.index !== this.props.activeField) {
            //this.setState({ backgroundColor: "lightGrey" });
            this.setState({ border: "dashed 2px lightgrey" });
        }

    }

    render() {
        let input;
        let label;

        if (this.props.index === this.props.activeField) {
            if (this.state.border !== "dashed 2px teal") {
                this.setState({ border: "dashed 2px teal" });
            }
        } else {
            if (this.state.border === "dashed 2px teal") {
                this.setState({ border: "" });
            }
        }

        if (this.props.field.name === "textInput") {
            label = <label style={{
                cursor: "pointer", textShadow: this.props.field.style.textShadow.right + "px " +
                    this.props.field.style.textShadow.down + "px " +
                    this.props.field.style.textShadow.blur + "px " +
                    this.props.field.style.textShadow.color
            }} >{this.props.field.label}</label>;
            input = <div><input type="text" style={{ width: "100%", cursor: "pointer" }} value={this.props.field.placeholder} disabled></input></div>
        } else if (this.props.field.name === "email") {
            label = <label style={{ cursor: "pointer" }}>{this.props.field.label}</label>;
            input = <div><input type="email" style={{ width: "100%", cursor: "pointer" }} value={this.props.field.placeholder} disabled></input></div>
        } else if (this.props.field.name === "button") {
            input = <button>{this.props.field.label}</button>
        }

        return (
            <li onClick={this.click} onMouseEnter={this.onHover} onMouseLeave={this.offHover} style={{
                width: this.props.field.style.width + "%",
                display: this.props.field.style.display,
                marginTop: this.props.field.style.marginTop + "px",
                //paddingLeft: "5px", paddingRight: "5px", paddingBottom: "5px",
                cursor: "pointer",
                backgroundColor: this.state.backgroundColor,
                border: this.state.border
            }}>
                <div>
                    <div style={{ width: "100%" }}>
                        <div style={{ width: "100%", textAlign: this.props.field.style.textAlign }}>
                            {
                                label
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