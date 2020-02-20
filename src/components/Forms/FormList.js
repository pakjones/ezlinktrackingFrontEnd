import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Forms from './Forms';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import FormListItem from './FormListItem';

class FormList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedForm: ""
        };
    }

    setSelectedForm = (index) => {
        this.setState({ selectedForm: index });
    }

    render() {
        if (this.state.selectedForm === "") {
            if (this.props.forms && this.props.forms.length > 0) {
                let array = [];
    
                for (let i = 0; i < this.props.forms.length; i++) {
                    array.push(<ListGroup.Item key={i}>
                                    <FormListItem form={this.props.forms[i]} key={i} index={i} setSelectedForm={this.setSelectedForm}/>
                                </ListGroup.Item>)
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
        } else {
            return <Forms form={this.state.selectedForm} />
        }
        

    }
}

export default FormList;