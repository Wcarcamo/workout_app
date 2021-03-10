import React from 'react';

class Exercise extends React.Component {
  render() {
    return (
      <div className="w3-row-padding w3-padding-small">
        <div className="w3-col s3">
          <select className="w3-select w3-light-grey">
            <option value="1">Squat</option>
            <option value="2">Bench Press</option>
            <option value="3">Barbell Row</option>
            <option value="4">Chin Up</option>
            <option value="5">Overhead Press</option>
            <option value="6">Deadlift</option>
          </select>
        </div>

        <div className="w3-col s3">
            <input className="w3-input w3-border" type="text" />
        </div>

        <div className="w3-col s3">
            <input className="w3-input w3-border" type="text" /> 
        </div>

        <div className="w3-col s1">
          <input className="w3-check" type="checkbox" />
        </div>

        <div className="w3-col s1">
          <input className="w3-check" type="checkbox" />
        </div>

        <div className="w3-col s1">
          <input className="w3-check" type="checkbox" />
        </div>
      </div>
    );
  }
}

export default Exercise;