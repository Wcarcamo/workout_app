import React from 'react';

class ExerciseForm extends React.Component {
  render() {
    return (
      <div className="w3-padding w3-rest">
      <div className="w3-card">
        <form className="w3-container">
          <h2>{this.props.exercise}</h2>
          <label>lbs:</label>
          <input className="w3-input w3-border" type="text" />
          <label>Sets:</label>
          <input className="w3-input w3-border" type="text" />
          <label>Reps:</label>
          <input className="w3-input w3-border" type="text" />

          <input className="w3-check" type="checkbox" />
          <label className="w3-margin-left">BodyWeight</label>
          <br></br>
          <input className="w3-check" type="checkbox" />
          <label className="w3-margin-left">To Failure</label>
          <br></br>
          <input className="w3-check" type="checkbox" />
          <label className="w3-margin-left">Goal Met</label>
          <br></br>
          <button className="w3-button w3-blue-gray w3-section">Submit</button>
        </form>
      </div>
    </div>
    );
  }
}

export default ExerciseForm;