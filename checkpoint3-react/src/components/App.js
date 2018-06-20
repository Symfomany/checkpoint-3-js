import React, { Component } from "react";
import Cards from "./Cards";
import FormCapitale from "./FormCapitale";
import datas from "./datas.json";
import { FormGroup, Label, Input } from "reactstrap";

class App extends Component {
  constructor() {
    super();
    this.state = {
      capitales: datas,
      visible: false,
      trie: false
    };
    this.addCard = this.addCard.bind(this);
    this.deleteCard = this.deleteCard.bind(this);
    this.changeVisible = this.changeVisible.bind(this);
  }

  addCard(newCard) {
    this.setState({ capitales: [...this.state.capitales, newCard] });
  }

  deleteCard(e) {
    const tab = this.state.capitales.filter(
      capitale => capitale.id - e.target.id
    );
    this.setState({
      capitales: tab
    });
  }

  changeVisible() {
    //console.log(this.capitale.disponible);
    this.setState({
      visible: !this.state.visible
    });
    if (this.state.visible !== true) {
      this.setState({
        capitales: this.state.capitales.filter(
          capitale => capitale.disponible === true
        )
      });
    } else {
      this.setState({
        capitales: datas
      });
    }
  }

  // je crée une liste déroulante et je lui lie une fonction
  // quand je clique sur la value 1 cela me trie par ordre alphabetique
  // quand je clique sur la value 2 cela me trie par ordre de population
  // si mon id = value 1 return value 1

  trier() {
    const select = document.getElementById("trie"),
      index = select.selectedIndex;

    console.log(select.options[index].value);

    // if (select.options[index].value === "alpha");
    // {
    //   console.log("test");
    // }
    // else {
    // console.log("test2")
    // }
  }

  render() {
    return (
      <div>
        <FormGroup check>
          <Label check>
            <Input type="checkbox" onClick={this.changeVisible} /> Afficher les
            cards disponibles
          </Label>
        </FormGroup>
        <FormGroup>
          <Label for="select">Trier</Label>
          <Input type="select" name="select" id="trie" onChange={this.trier}>
            <option value="alpha">Trier par ordre alphabétique</option>
            <option value="popu">Trier par ordre de population</option>
          </Input>
        </FormGroup>

        <Cards datas={this.state.capitales} deleteCard={this.deleteCard} />
        <FormCapitale addCard={this.addCard} />
      </div>
    );
  }
}

export default App;

/* PARTIE 1 */
// 1. je recupere mes données depuis mon fichier datas.json
// 2. je lie mon fichier Card à App et le state de App à Card
// 3. je crée une fonction pour ajouter une nouvelle card à partir d'un formulaire
// je lui dis : quand tu rafrechis mon state, tu prends les données du state et tu les changes par les changés dans le state
// 4. je crée une fonction pour delete une card
// pour ca j'envleve l'id target sur les id globales

/* CHECKBOX */
// 1. je crée ma checkbox et je lui lie une fonction au clique
// 2. j'initialise visible dans le state
// 3. si la case est coché je filtre mes elements pour en afficher moins
