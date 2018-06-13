import React, { Component } from "react";
import { FormGroup, Input, Label } from "reactstrap";

class CheckboxFiltre extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <FormGroup check>
        <Label check for="disponible">
          <Input
            type="checkbox"
            id="disponible"
            name="disponible"
            onClick={this.props.dispo}
          />{" "}
          Filtrer les destination disponibles
        </Label>
      </FormGroup>
    );
  }
}

export default CheckboxFiltre;
