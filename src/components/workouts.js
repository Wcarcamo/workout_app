import React from 'react';
import Bucket from './bucket'
import Wka from './wka';
import Wkb from './wkb';
import Wkc from './wkc';

class Workouts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {Form: ""};
  }

  handleForm = (e) => {
    this.setState({Form: e});
  }

  render() {
      const displayF = this.state.Form;
      let displayForm;
      switch(displayF){
        case "A":
          displayForm = <Wka />;
          break;
        case "B":
          displayForm = <Wkb />;
          break;
        case "C":
          displayForm = <Wkc />;
          break;
        default:
          displayForm = <p></p>
      };

    return (
      <div>
        <div className="w3-row-padding w3-padding-32">
          <Bucket name="A" onCustomClick={() => this.handleForm("A")} />
          <Bucket name="B" onCustomClick={() => this.handleForm("B")} />
          <Bucket name="Custom" onCustomClick={() => this.handleForm("C")} />
        </div>
        {displayForm}
      </div>

    );
  }
}

export default Workouts;