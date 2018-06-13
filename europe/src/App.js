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
      population: defaultPopulation,
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
  handleNumberCities = (e) => {
    if (e.target.value < 10) {
      const numberCities = [...defaultDatas]
      numberCities.splice(e.target.value)
      this.setState({
        datas: [...numberCities]
      })
    } else {
      this.setState({
        datas: [...defaultDatas]
      })
    }
  }
  handleOrder = (e) => {
    const eventValue = parseInt(e.target.value,10)
    if (eventValue === 1 || eventValue === 2) {
      let newDatasOrder = [...this.state.datas]
      newDatasOrder = eventValue === 2 ? newDatasOrder.sort((a,b) => a.title < b.title) : newDatasOrder.sort((a,b) => b.title < a.title)
      this.setState({
        datas: [...newDatasOrder]
      })
    } else if (eventValue === 3 || eventValue === 4) {
      let newDatasOrder = [...this.state.datas]
      newDatasOrder = eventValue === 4 ? newDatasOrder.sort((a,b) => a.pop - b.pop) : newDatasOrder.sort((a,b) => b.pop - a.pop)
      this.setState({
        datas: [...newDatasOrder]
      })
    } else {
      this.setState({
        datas: [...defaultDatas]
      })
    }
  }
  render() {
    return (
      <Container>
        <SelectDisplay
          isCheck={this.handleCheck}
          population={this.state.population}
          filterPop={this.handleFilterPop}
          numberCities={this.handleNumberCities}
          changeOrder={this.handleOrder}
        />
        <DisplayList cities={this.state.datas} deleteCity={this.handleDelete} />
        <CreateCity addCity={this.handleSubmit} />
      </Container>
    );
  }
}

export default App;
