import React from 'react';

class Bucket extends React.Component {
  render() {
    return (
      <div className="w3-third">
        <div className="w3-card w3-container w3-center w3-hover-blue-gray" onClick={this.props.onCustomClick}>
          <p>{this.props.name}</p>
        </div>
      </div>
    )
    ;
  }
}

export default Bucket;