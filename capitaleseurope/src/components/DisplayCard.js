import React, { Component } from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

class DisplayCard extends Component {
  render() {
    return (
      <Card className="capitalCards">
        <CardImg
          top
          width="100%"
          src={this.props.detail.img}
          alt="Card image cap"
        />
        <CardBody>
          <CardTitle>{this.props.detail.title}</CardTitle>
          <CardText>{this.props.detail.description}</CardText>
        </CardBody>
      </Card>
    );
  }
}

export default DisplayCard;
