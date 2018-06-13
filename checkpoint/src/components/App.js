import React, { Component } from 'react';
import Formulaire from './Formulaire';
import Liste from './Liste';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }


  render() {
    return (
      <div>
        <Liste />
        <Formulaire />
      </div>

    );
  };
}


export default App;
