import React, { Component } from "react";
import "./App.css";
import { Container, Row } from "reactstrap";
import datas from "../datas.json";
import Formulaire from "./Formulaire";
import DisplayCard from "./DisplayCard";
import ButtonSupp from "./ButtonSupp";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      capitales: datas
    };
    this.ajouter = this.ajouter.bind(this);
    this.supp = this.supp.bind(this);
  }

  ajouter(datas) {
    let capitales = this.state.capitales.concat(datas);
    this.setState({ capitales });
  }

  supp(ville) {
    let capitales = [...this.state.capitales].filter(elt => elt.id !== ville);
    this.setState({ capitales });
  }

  render() {
    return (
      <Container>
        <Row>
          <header>
            <h1>Les Capitales Européennes</h1>
          </header>
        </Row>
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
