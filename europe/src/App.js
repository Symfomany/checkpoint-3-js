import React, { Component } from "react";
import datas from "./datas.json";
import DisplayList from "./DisplayList";
import { Container } from "reactstrap";
import CreateCity from "./CreateCity";
import SelectDisplay from "./SelectDisplay";

const defaultDatas = datas;
const defaultPopulation = datas.map(element => element.pop);
class App extends Component {
  constructor() {
    super();
    this.state = {
      datas,
      population: defaultPopulation
    };
  }
  handleSubmit = datasvalues => {
    this.setState({ datas: [...this.state.datas, datasvalues] });
  };
  handleDelete = index => {
    this.state.datas.splice(index, 1);
    this.setState({ datas: [...this.state.datas] });
  };
  handleCheck = e => {
    const newDatas = [];
    if (e.target.checked) {
      this.state.datas.map(
        element => (element.disponible ? newDatas.push(element) : null)
      );
      this.setState({ datas: [...newDatas] });
    } else {
      this.setState({ datas: defaultDatas });
    }
  };
  handleFilterPop = value => {
    const defaultPop = [...defaultDatas];
    const newPop = defaultPop.filter(element => element.pop >= value);
    this.setState({ datas: newPop });
  };
  render() {
    return (
      <Container>
        <SelectDisplay
          isCheck={this.handleCheck}
          population={this.state.population}
          filterPop={this.handleFilterPop}
        />
        <DisplayList cities={this.state.datas} deleteCity={this.handleDelete} />
        <CreateCity addCity={this.handleSubmit} />
      </Container>
    );
  }
}

export default App;
