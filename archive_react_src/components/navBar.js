import React from 'react';

class Bar extends React.Component {
  render() {
    return (
      <div className="w3-bar w3-blue-gray">
        <button className="w3-bar-item w3-button">Log</button>
        <button className="w3-bar-item w3-button">Track</button>
      </div>
    );
  }
}
  
export default Bar;