import React, { Component } from "react";
import datas from "./datas.json";
import Liste from "./Liste";
import Formulaire from "./Formulaire";
import Recherche from "./Recherche";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      villes: datas
    };
    this.addVilles = this.addVilles.bind(this);
    this.delete = this.delete.bind(this);
    this.search = this.search.bind(this);
  }

  addVilles(newVille) {
    this.setState({ villes: [...this.state.villes, newVille] });
  }

  delete(ville) {
    this.state.villes.splice(ville, 1);
    this.setState(this.state.villes);
  }

  search(search) {
    const maRegex = new RegExp(search);
    const tab = this.state.villes.filter(elt => maRegex.test(elt.title));
    this.setState({ villes: tab });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header" />
        <Recherche search={this.search} />
        <Liste villes={this.state.villes} villesDelete={this.delete} />
        <Formulaire addVilles={this.addVilles} />
      </div>
    );
  }
}

export default App;
