import React, { Component } from "react";
import { Button } from "reactstrap";

class ButtonSupp extends Component {
  constructor(props) {
    super(props);
    this.supp = this.supp.bind(this);
  }

  supp(e) {
    this.props.supp(this.props.id);
  }
  render() {
    return (
      <Button type="submit" onClick={e => this.supp(e)}>
        Supprimer
      </Button>
    );
  }
}

export default ButtonSupp;
