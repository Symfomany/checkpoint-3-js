import React, { Component } from "react";
import { FormGroup, Label, Input } from "reactstrap";
import Emitter from "./emitter";

class SelectDisplayCardsForms extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isChecked: false
        }
        Emitter.addListener("alert", this.receiveEmitter);
    }
    handleChecked = (e) => {
        this.props.numberCities(e)
        this.setState({
            isChecked: true
        })
        Emitter.emit("alert");
    }
    receiveEmitter = () => {
        setTimeout(() => this.setState({
            isChecked: false
        }),1000)
    }
  render() {
      return (
          <FormGroup check>
      <Label check>
        <Input
          type="radio"
          name={`radio${this.props.number}`}
          id={`radio${this.props.number}`}
          value={this.props.number}
          onChange={e => this.handleChecked(e)}
          checked={this.state.isChecked}
          />Display {this.props.number >= 10 ? "all" : this.props.number} cities
      </Label>
      </FormGroup>
  );
}  
};

export default SelectDisplayCardsForms;
