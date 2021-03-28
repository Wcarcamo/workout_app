import React from 'react';
// import ExerciseForm from './exerciseform';

class Exercises extends React.Component {
  constructor(props) {
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      exercise: "Squat",
      lbs: 0,
      sets: 3,
      reps: 5,
      bw: false,
      tf: false,
      gm: false
    };
  }

  handleForm = (e) => {
    this.setState({exercise: e});
  }

  handleInputChange(e) {
    const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  submitForm() {
    var dat = [
      this.state.exercise,
      this.state.lbs,
      this.state.sets,
      this.state.reps,
      this.state.bw,
      this.state.tf,
      this.state.gm
    ];
    alert('array: ' + dat);
  }

  render() {
    return (
      <div className="w3-row">
        <div className="w3-padding w3-quarter">
          <div className="w3-card w3-bar-block w3-light-gray">
            <button 
              className="w3-bar-item w3-button"
              onClick={() => this.handleForm("Squat")}>
                Squat</button>
            <button 
              className="w3-bar-item w3-button"
              onClick={() => this.handleForm("Bench Press")}>
                Bench Press</button>
            <button 
              className="w3-bar-item w3-button"
              onClick={() => this.handleForm("Chin Up")}>
                Chin Up</button>
            <button 
              className="w3-bar-item w3-button"
              onClick={() => this.handleForm("Overhead Press")}>
                Overhead Press</button>
            <button 
              className="w3-bar-item w3-button"
              onClick={() => this.handleForm("Deadlift")}>
                Deadlift</button>
            <button 
              className="w3-bar-item w3-button"
              onClick={() => this.handleForm("Custom")}>
                Custom</button>
          </div>
        </div>
        <div className="w3-padding w3-rest">
          <div className="w3-card">
            <form className="w3-container">
              <h2>{this.state.exercise}</h2>
              <label>lbs:</label>
                <input 
                  name="lbs"
                  className="w3-input w3-border" 
                  type="number" 
                  value={this.state.lbs} 
                  onChange={this.handleInputChange} />
              <label>Sets:</label>
                <input
                  name="sets"
                  className="w3-input w3-border" 
                  type="number" 
                  value={this.state.sets}
                  onChange={this.handleInputChange} />
              <label>Reps:</label>
                <input
                  name="reps"
                  className="w3-input w3-border" 
                  type="number" 
                  value={this.state.reps} 
                  onChange={this.handleInputChange} />
              <input 
                name="bw"
                className="w3-check" 
                type="checkbox" 
                onChange={this.handleInputChange} />
                <label className="w3-margin-left">BodyWeight</label>
              <br></br>
              <input 
                name="tf"
                className="w3-check" 
                type="checkbox" 
                onChange={this.handleInputChange} />
                <label className="w3-margin-left">To Failure</label>
              <br></br>
              <input 
                name="gm"
                className="w3-check" 
                type="checkbox" 
                onChange={this.handleInputChange} />
                <label className="w3-margin-left">Goal Met</label>
              <br></br>
              <button className="w3-button w3-blue-gray w3-section" onClick={this.submitForm}>Submit</button>
            </form>
          </div>
        </div>
      </div>
      
    );
  }
}

export default Exercises;