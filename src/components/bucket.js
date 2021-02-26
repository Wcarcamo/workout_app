import React from 'react';
import ReactDOM from 'react-dom';

class Bucket extends React.Component {
  render() {
    return <div className="w3-col s4 w3-card"><p>{this.props.name}</p></div>;
  }
}

export default Bucket;