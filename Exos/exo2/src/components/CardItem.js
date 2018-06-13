import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Col
} from "reactstrap";

class CardItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.remove(this.props.card);
  }

  render() {
    return (
      <Col sm="4">
        <Card outline color="info">
          <CardImg
            top
            height="200"
            src={this.props.card.img}
            alt="Card image cap"
          />
          <CardBody>
            <CardTitle>{this.props.card.title}</CardTitle>
            <CardSubtitle>{this.props.card.pop} habitants</CardSubtitle>
            <CardText>{this.props.card.description}</CardText>
            <Button onClick={this.handleClick}>Remove</Button>
          </CardBody>
        </Card>
      </Col>
    );
  }
}

export default CardItem;
