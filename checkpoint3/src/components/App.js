import React, { Component } from 'react';
import './App.css';

import Formulaire from './Formulaire';
import Datas from "../json/datas";
import Liste from './Liste';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      datas: Datas
    };

    this.addCity = this.addCity.bind(this);
     this.deleteCard = this.deleteCard.bind(this);
  }

  addCity(newCity) {
    let newEntry = [...this.state.datas, newCity];
    // console.log(newEntry)

    this.setState({ datas: newEntry });
  }

  deleteCard(id) {
 
 
    const initialDatas = this.state.datas;
    const newDatas = initialDatas.filter(elt => elt.id !== Number(id));
    this.setState({ datas: newDatas });
  }

  render() {
    console.log(this.state.datas);
    return (
      <div className="App">
        <h1>Checkpoint 3</h1>
        <p className="monkey">
          <img
            src="https://media.giphy.com/media/T8Dhl1KPyzRqU/giphy.gif"
            alt="monkey"
          />
        </p>

        <hr />
        <Liste datas={this.state.datas} deleteCard={this.deleteCard}/>
        <Formulaire dataLength={Datas.length} addCity={this.addCity} />
      </div>
    );
  }
}

export default App;
