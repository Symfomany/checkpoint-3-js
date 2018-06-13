import React, { Component } from "react";

class Liste extends Component {
  render() {
    return (
      <div>
        <h3>Liste des capitales</h3>
        <ul>
          {this.props.villes.map((ville, index) => (
            <li key={index}>
              <h3>{ville.title}</h3>
              <i>
                Latitude : {ville.lat} Longitude : {ville.lng}
              </i>
              <button
                type="submit"
                onClick={() => this.props.villesDelete(index)}
              >
                X
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Liste;
