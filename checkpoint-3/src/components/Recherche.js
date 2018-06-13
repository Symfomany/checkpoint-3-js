import React, { Component } from "react";

class Recherche extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ""
    };
  }

  render() {
    return (
      <div>
        <label>Barre de recherche</label>
        <input
          type="search"
          placeholder="recherche"
          id="recherche"
          onChange={e => this.props.search(e.target.value)}
          required
        />
      </div>
    );
  }
}

export default Recherche;
