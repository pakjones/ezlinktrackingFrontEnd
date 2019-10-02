import React from 'react';

class List extends React.Component {
    constructor(props) {
      super(props);
      this.state = {id: this.props.id};
    }
  
    render() {

      let array = [];
      if (this.props.clicks) {
        for (let i = 0; i < this.props.clicks.length; i++) {
          array.push(
            <li>{this.props.clicks[i]}</li>
          );
        }
      }
      

      return (
        <div>
          <h1>Total Clicks: {array.length}</h1>
          <ul>
              {array}
          </ul>
        </div>
      );
    }
  }

  export default List;