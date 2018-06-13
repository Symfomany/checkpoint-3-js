import React, { Component } from "react";
import "./App.css";
import { Container, Row } from "reactstrap";
import datas from "../datas.json";
import Formulaire from "./Formulaire";
import DisplayCard from "./DisplayCard";
import ButtonSupp from "./ButtonSupp";
import CheckboxFiltre from "./CheckboxFiltre";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      capitales: datas,
      saveCapitales: [],
      filtreDispo: false
    };
    this.ajouter = this.ajouter.bind(this);
    this.supp = this.supp.bind(this);
    this.dispo = this.dispo.bind(this);
  }

  ajouter(datas) {
    let capitales = this.state.capitales.concat(datas);
    this.setState({ capitales });
  }

  supp(ville) {
    let capitales = [...this.state.capitales].filter(elt => elt.id !== ville);
    this.setState({ capitales });
  }

  dispo() {
    let saveCapitales = [...this.state.saveCapitales];
    saveCapitales.length === 0
      ? this.setState({ saveCapitales: this.state.capitales })
      : null;
    let capitales = [...this.state.capitales].filter(
      elt => elt.disponible === true
    );
    this.state.filtreDispo === false
      ? this.setState({
          capitales,
          filtreDispo: true
        })
      : this.setState({
          capitales: saveCapitales,
          filtreDispo: false
        });
  }

  render() {
    return (
      <Container>
        <Row>
          <header>
            <h1>Les Capitales Européennes</h1>
          </header>
        </Row>
        <CheckboxFiltre dispo={this.dispo} />
        <Row>
          {this.state.capitales.map(capitale => (
            <div>
              <DisplayCard detail={capitale} />
              <ButtonSupp supp={this.supp} id={capitale.id} />
            </div>
          ))}
        </Row>
        <Formulaire ajouter={this.ajouter} />
      </Container>
    );
  }
}

export default App;
