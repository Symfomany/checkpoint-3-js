import React, { Component } from "react";

import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";

import { CardContainer } from "../styled/containers";
import Emitter from "../emitter";

class CapitalCard extends Component {
  onDeleteCard(id) {
    Emitter.emit("cardDeleted", id);
  }

  render() {
    return (
      <CardContainer>
        <Card>
          <CardImg
            top
            width="100%"
            src={this.props.data.img}
            alt="Image from card "
          />
          <CardBody>
            <CardTitle>{this.props.data.title}</CardTitle>
            <CardSubtitle>Card subtitle</CardSubtitle>
            <CardText>{this.props.data.description}</CardText>
            <Button
              color="danger"
              onClick={() => this.onDeleteCard(this.props.data.id)}
            >
              Supprimer
            </Button>
          </CardBody>
        </Card>
      </CardContainer>
    );
  }
}

export default CapitalCard;
