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
        if (this.props.field.name === "name") {
            name = "Name: ";
            input = <div><input type="text" style={{ width: this.props.field.style.width + "%" }}></input></div>
        } else if (this.props.field.name === "email") {
            name = "Email: ";
            input = <div><input type="email" style={{ width: this.props.field.style.width + "%" }}></input></div>
        }
        return (
            <li>
                <div className="container">
                    <div className="row">
                        <div className="col-md-8">
                            {
                                name
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