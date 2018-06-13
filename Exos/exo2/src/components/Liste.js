import React, { Component } from "react";
import CardItem from "./CardItem";
import { Row } from "reactstrap";
// import { Route, Link } from "react-router-dom";

class Liste extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Row>
        {this.props.cards.map((card, index) => (
          <CardItem key={index} remove={this.props.remove} card={card} />
        ))}
      </Row>
    );
  }
}

export default Liste;
