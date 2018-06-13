import React, { Component } from "react";
import Extrait from "./Extrait";
import Formulaire from "./Formulaire";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import datas from "./datas.json";

class App extends Component {
  render() {
    console.log(datas);
    return (
      <div className="App">
        <header className="App-header">
          <h2>Des capitales européennes</h2>
        </header>

        <div>
          <Extrait />
          <Formulaire />
        </div>
      </div>
    );
  }
}

export default App;
