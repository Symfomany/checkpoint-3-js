import React, { Component } from "react";
import Liste from "./Liste";
import datas from "./datas.json";
import { Container } from "reactstrap";
import FormItem from "./FormItem";
import { FormGroup, Label, Input } from "reactstrap";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: this.getData(),
      state: false
    };
    this.record = this.record.bind(this);
    this.getData = this.getData.bind(this);
    this.remove = this.remove.bind(this);
    this.cocher = this.cocher.bind(this);
  }
  getData = () => {
    return datas;
  };
  record(value) {
    this.setState({
      cards: [...this.state.cards, value]
    });
  }
  remove(card) {
    let datas = this.state.cards;
    const tab = datas.filter(elt => elt.id !== card.id);
    this.setState({
      cards: tab
    });
    console.log(tab);
  }
  cocher() {
    let datas = this.state.cards;
    const tab = datas.filter(elt => elt.disponible === true);
    this.state.state === false
      ? this.setState({
          cards: tab,
          state: true
        })
      : this.setState({
          cards: this.getData(),
          state: false
        });
  }

  render() {
    return (
      <Container>
        <FormGroup check>
          <h4>
            <Label check>
              <Input type="checkbox" onChange={this.cocher} />
              Filtrer les capitales disponible
            </Label>
          </h4>
        </FormGroup>
        <FormItem record={this.record} />
        <Liste remove={this.remove} cards={this.state.cards} />
      </Container>
    );
  }
}

export default App;
