import React, { Component } from "react";
import datas from "./datas.json";
import DisplayList from "./DisplayList";
import { Container } from "reactstrap";
import CreateCity from "./CreateCity";
class App extends Component {
  constructor() {
    super();
    this.state = {
      datas
    };
  }
  handleDelete = index => {
    this.state.datas.splice(index, 1);
    this.setState({ datas: [...this.state.datas] });
  };
  render() {
    return (
      <Container>
        <DisplayList cities={this.state.datas} deleteCity={this.handleDelete} />
        <CreateCity />
      </Container>
    );
  }
}

export default App;
