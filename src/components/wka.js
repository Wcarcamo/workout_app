import React from 'react';
import Exercise from './exercise';

class Wka extends React.Component {
  render() {
    return (
      <div className="w3-container">
        <div className="w3-card">
          <div className="w3-container">
            <h3>A</h3>
          </div>
          <form className="w3-padding-16">
            <div className="w3-row-padding">
              <div className="w3-col s3">
                <p>Exercise</p>
              </div>
              <div className="w3-col s3">
                <p>Sets</p>
              </div>
              <div className="w3-col s3">
                <p>Reps</p>
              </div>
              <div className="w3-col s1">
                <p>Bodyweight</p>
              </div>
              <div className="w3-col s1">
                <p>To Failure</p>
              </div>
              <div className="w3-col s1">
                <p>Goal Met</p>
              </div>
            </div>
            <Exercise />
            <Exercise />
            <Exercise />
            <div className="w3-container">
              <button className="w3-button w3-blue-gray w3-padding">Submit</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Wka;