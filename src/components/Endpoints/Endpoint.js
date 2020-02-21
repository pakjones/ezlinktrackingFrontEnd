import AceEditor from "react-ace";
import React from 'react';
import Button from 'react-bootstrap/Button';

const axios = require('axios');

class Endpoint extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            codeValue: `let test = (req) => { let object = {url: "https://enic23h1g656j.x.pipedream.net/", body: req};return object;}; test(req);`,
            url: ""
        };
    }

    
    test = () => {
        console.log(this.state.codeValue);
        eval(this.state.codeValue);
    }

    handleUrlChange = (e) => {
        this.setState({ url: e.target.value })
    }

    onChange = (newValue) => {
        this.setState({ codeValue: newValue });
    }

    create = () => {
        let url = 'http://app.okrana.icu/endpoint/create';

        axios.post(url, {
            "url": this.state.url,
            "function": this.state.codeValue
        })
            .then(function (response) {
                console.log(response);
                if (response.status === 200) {
                    console.log(response.data);
                    return true;
                } else {
                    console.log(response);
                    return false;
                }
            })
            .catch(function (error) {
                console.log(error);
                return false;
            });
    }

    render() {
        return (
            <div className="container">
                <span>app.okrana.icu/endpoint/consume/</span><input onChange={this.handleUrlChange}></input>
                <AceEditor
                    placeholder="Be sure to return an object"
                    mode="javascript"
                    theme="monokai"
                    name="blah2"
                    onLoad={this.onLoad}
                    onChange={this.onChange}
                    fontSize={14}
                    showPrintMargin={true}
                    showGutter={true}
                    highlightActiveLine={true}
                    value={this.state.codeValue}
                    setOptions={{
                    enableBasicAutocompletion: false,
                    enableLiveAutocompletion: false,
                    enableSnippets: false,
                    showLineNumbers: true,
                    tabSize:2,
                    }}/>
                    <button onClick={this.create}>Create</button>
            </div>
        )
    }
}

export default Endpoint;