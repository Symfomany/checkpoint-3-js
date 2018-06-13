import React, { Component } from "react";
import { FormGroup, Input, Label } from "reactstrap";

class SelectDisplayPopulation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sliderValue: undefined
    };
  }
  handleSlider = e => {
    this.setState({
      sliderValue: e.target.value
    });
    this.props.filterPop(e.target.value);
  };
  render() {
    return (
      <FormGroup>
        <Label>{this.state.sliderValue && this.state.sliderValue}</Label>
        <Input
          type="range"
          min={Math.min(...this.props.population)}
          max={Math.max(...this.props.population)}
          onChange={e => this.handleSlider(e)}
        />
      </FormGroup>
    );
  }
}

export default SelectDisplayPopulation;
