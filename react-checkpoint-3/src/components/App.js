import React, { Component } from "react";

import { AppContainer } from "../styled/containers";
import { H1 } from "../styled/headers";

import CapitalsList from "./CapitalsList";
import AddCapitalForm from "./AddCapitalForm";
import ListActions from "./ListActions";

import data from "../data/datas.json";

import Emitter from "../emitter";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addFormVisible: false,
      search: "",
      availableOnly: false,
      capitales: data
    };

    this.showAddForm = this.showAddForm.bind(this);
    this.addData = this.addData.bind(this);
    this.onDeleteCard = this.onDeleteCard.bind(this);
    this.emptyList = this.emptyList.bind(this);
    this.filterByAvailable = this.filterByAvailable.bind(this);

    Emitter.addListener("cardDeleted", this.onDeleteCard);
    Emitter.addListener("availableOnly", this.filterByAvailable);
  }

  showAddForm() {
    this.setState({ addFormVisible: !this.state.addFormVisible });
  }

  addData(data) {
    data.id = this.state.capitales.length + 1;
    this.setState({ capitales: [data, ...this.state.capitales] });
    this.showAddForm();
  }

  onDeleteCard(id) {
    const data = this.state.capitales;
    data.reduce(
      (acc, current, index) => (current.id !== id ? acc : acc.splice(index, 1)),
      data
    );
    this.setState({ capitales: data });
  }

  emptyList() {
    this.setState({ capitales: [] });
  }

  filterByAvailable() {
    const available = this.state.availableOnly;

    if (available) {
      console.log("passed");
      this.setState({
        capitales: this.state.capitales.filter(item => item.disponible === true)
      });
    } else {
      this.setState({
        capitales: data
      });
    }

    this.setState({
      availableOnly: !this.state.availableOnly
    });
  }

  render() {
    return (
      <AppContainer>
        <H1>Capitales</H1>
        <ListActions
          addFormVisible={this.state.addFormVisible}
          showAddForm={this.showAddForm}
          emptyList={this.emptyList}
          availableOnly={this.state.availableOnly}
        />
        {this.state.addFormVisible && <AddCapitalForm addData={this.addData} />}
        <hr />
        <CapitalsList data={this.state.capitales} />
      </AppContainer>
    );
  }
}

export default App;
