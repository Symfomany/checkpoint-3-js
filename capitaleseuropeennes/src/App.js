import React, { Component } from "react";
import "./App.css";
import Liste from "./Liste";
import Formulaire from "./Formulaire";
import datas from "./datas.json";
import { Container } from "reactstrap";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cities: datas
    };
    this.add = this.add.bind(this);
    this.remove = this.remove.bind(this);
  }

  componentDidUpdate(prevProps) {
    // Typical usage (don't forget to compare props):
    console.log(this.state.cities);
  }

  add(data) {
    console.log(data);
    this.setState(
      {
        cities: [...this.state.cities, data]
      }
      //this.updateLocalStorage // FONCTION A LANCER APRES MAJ ASYNCHRONE DU STATE
    );
  }

  remove(id) {
    console.log("j'ai pas le temps");
  }

  render() {
    return (
      <Container>
        <Liste cities={this.state.cities} supprimerVille={this.remove} />
        <Formulaire addCity={this.add} />
      </Container>
    );
  }
}

export default App;
