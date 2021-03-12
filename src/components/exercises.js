import React from 'react';
import ExerciseForm from './exerciseform';

class Exercises extends React.Component {
  constructor(props) {
    super(props);
    this.state = {exercise: "Squat"};
  }

  handleForm = (e) => {
    this.setState({exercise: e});
  }

  render() {
    let exerciseForm;
    switch (this.state.exercise) {
      case "Squat":
        exerciseForm = <ExerciseForm exercise={this.state.exercise} />;
        break;
      case "Bench Press":
        exerciseForm = <ExerciseForm exercise={this.state.exercise} />;
        break;
      case "Chin Up":
        exerciseForm = <ExerciseForm exercise={this.state.exercise} />;
        break;
      case "Overhead Press":
        exerciseForm = <ExerciseForm exercise={this.state.exercise} />;
        break;
      case "Deadlift":
        exerciseForm = <ExerciseForm exercise={this.state.exercise} />;
        break;
      case "Custom":
        exerciseForm = <ExerciseForm exercise={this.state.exercise} />;
        break;
      default:
        break;
    }
    return (
      <div className="w3-row">
        <div className="w3-padding w3-quarter">
          <div className="w3-card w3-bar-block w3-light-gray">
            <button 
              className="w3-bar-item w3-button"
              onClick={() => this.handleForm("Squat")}
            >Squat</button>
            <button 
              className="w3-bar-item w3-button"
              onClick={() => this.handleForm("Bench Press")}
            >Bench Press</button>
            <button 
              className="w3-bar-item w3-button"
              onClick={() => this.handleForm("Chin Up")}
            >Chin Up</button>
            <button 
              className="w3-bar-item w3-button"
              onClick={() => this.handleForm("Overhead Press")}
            >Overhead Press</button>
            <button 
              className="w3-bar-item w3-button"
              onClick={() => this.handleForm("Deadlift")}
            >Deadlift</button>
            <button 
              className="w3-bar-item w3-button"
              onClick={() => this.handleForm("Custom")}
            >Custom</button>
          </div>
        </div>
        {exerciseForm}
      </div>
      
    );
  }
}

export default Exercises;