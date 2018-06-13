import React, { Component } from 'react';
import Cards from './Cards';
import Formulaire from './Formulaire';
import datas from "./datas.json";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      capitales: datas
    };
    this.delete = this.delete.bind(this);
    this.addCapitale = this.addCapitale.bind(this);
  }

  delete(e) {
    console.log(e.target.id);
    const tab = this.state.capitales.filter(elt => elt.id !== Number(e.target.id))
    this.setState({
      capitales: tab
    })
  }

  addCapitale(newCapitale) {
    console.log(this.state.capitales.length);
    newCapitale.id = this.state.capitales.length + 1
    this.setState({
      capitales: [...this.state.capitales, newCapitale]
    })
  }


  render() {
    return (
      <div className="App">
        <Cards capitales={this.state.capitales} delete={this.delete} />
        <hr />
        <Formulaire addCapitale={this.addCapitale} />
      </div>
    );
  }
}

export default App;
