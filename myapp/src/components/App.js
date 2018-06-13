import React, {Component} from 'react';
import datas from '../datas.json'
import List from './List';
import Nav from './Nav'
import Filtre from './Filtre'
import AddForm from './AddForm'
import * as routes from './routes'
import {Route} from 'react-router-dom'
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: datas
    };
    this.delete = this
      .delete
      .bind(this)
    this.add = this
      .add
      .bind(this)
    this.filtreNbHab = this
      .filtreNbHab
      .bind(this)
  }
  delete(index) {
    const {data} = this.state;
    data.splice(index, 1)
    this.setState({data})
  }
  add(elt) {
    console.log(elt);
    const {data} = this.state;
    console.log(elt.disponible.value);
    const newCity = {
      title: elt.title.value,
      img: elt.img.value,
      lat: elt.lat.value,
      lng: elt.lng.value,
      pop: elt.pop.value,
      description: elt.description.value,
      disponible: elt.disponible.value === "on"
        ? true
        : false
    }
    data.splice(data.length, 0, newCity)
    this.setState({data})
  }
  filtreNbHab(nb) {
    const data = this
      .state
      .data
      .filter(elt => elt.pop >= Number(nb))
    this.setState({data})
  }
  render() {
    return (
      <div>
        <Nav/>
        <Filtre filtre={this.filtreNbHab}/>
        <Route
          exact
          path={routes.HOME}
          render={(props) => <List {...props} data={this.state.data} delete={this.delete}/>}/>
        <Route
          exact
          path={routes.ADD}
          render={(props) => <AddForm {...props} data={this.state.data} add={this.add}/>}/>
      </div>
    );
  }
}

export default App;
