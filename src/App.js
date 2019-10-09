import React from 'react';
import List from './list.js';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      redirect: "",
      createLink: "",
      getLink: "",
      checkId: "",
      clicks: [],
    };
  }

  handleIdChange = (e) => {
    this.setState({id: e.target.value});
    
  }
  handleRedirectChange = async (e) => {
    await this.setState({redirect: e.target.value});
    await this.setState({createLink: "https://app.okrana.icu/create/" + this.state.id + "/" + this.state.redirect})
    await this.setState({getLink: "https://app.okrana.icu/link/" + this.state.id});
  }

  handleCheckIdChange = (e) => {
    this.setState({checkId: e.target.value});
  }
  
  createLink = () => {
    this.setCreateLink();
    this.makeCreateCall();
  }

  setCreateLink = () => {
    /*this.setState({createLink: "https://app.okrana.icu/create/" + this.state.id + "/" + this.state.redirect});
    this.setState({getLink: "https://app.okrana.icu/link/" + this.state.id});*/
  }

  makeCreateCall = () => {
    let xhr = new XMLHttpRequest();

    xhr.open('GET', this.state.createLink);
    xhr.send();
  }

  checkLink = () => {
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        let json = xhr.response;

        let data = JSON.parse(json);
        let clicks = [];
        if (data[0]) {
          if (data[0].newClicks) {
            for (let i = 0; i < data[0].newClicks.length; i++) {
              clicks.push(data[0].newClicks[i].time);
            }
            
          }
        }
        this.setState({clicks: clicks});
        

        //this.setState({linkStats: xhr.response});
      }
    }

    let url = "https://app.okrana.icu/stats/" + this.state.checkId;

    xhr.open('GET', url);
    xhr.send();
  }

  render() {

    let createBtnStyle = () => {
      if (this.state.id === null) {
        return "btn btn-info disabled";
      } else {
        return "btn btn-info";
      }
    };

      return (
      <div>
        <div className="jumbotron text-center">
          <h1>EZLinktracking.com</h1>
          <p>Easy - Free - Link Tracking</p>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <h1>Create a Link</h1>
              <span><p>ID(test123):<input id="idInput" type="text" className="form-control" onChange={this.handleIdChange}></input></p></span>
              <span>Redirect URL(www.google.com):<input id="redirectInput" type="text" className="form-control" onChange={this.handleRedirectChange}></input></span>
              < br/>
              <button id="createBtn" className={createBtnStyle()} onClick={this.createLink}>Create</button>

              <p>{ this.state.getLink }</p>
            </div>

            <div className="col-lg-4">
              <h1>Check a link</h1>
              <span><p>Link ID:<input type="text" className="form-control" onChange={this.handleCheckIdChange}></input></p></span>

              <button id="checkBtn" className="btn btn-success" onClick={this.checkLink}>Check</button>
              < br/>
              < br/>
              
              <List clicks={this.state.clicks} />
            </div>
            <div className="col-lg-4">
              <div>
              
              </div>
            </div>
          </div>
          </div>
      </div>
      );
  }
}

export default App;
