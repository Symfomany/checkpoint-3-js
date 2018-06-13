import React, { Component } from 'react';
import Capitales from "./components/Capitales"


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Ajoutez une capitale</h1>
          <Capitales />
        </header>

      </div>
    );
  }
}

export default App;
