import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import "./Style.css";
import "bootstrap/dist/css/bootstrap.min.css";

import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  ButtonGroup
} from "reactstrap";
import Formulaire from "./Formulaire";

class Liste extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <Col>
          {this.props.pays.map(pays => (
            <Card className="card">
              <CardTitle className="titre">{pays.title}</CardTitle>
              <CardImg top width="100%" src={pays.img} alt="Photo du pays" />

              <CardBody>
                <CardSubtitle>
                  Latitude : {pays.lat} Longitude : {pays.lng}
                </CardSubtitle>
                <h5 className="mt-5">Descritption de la ville :</h5>
                <CardText>{pays.description}</CardText>

                <p>Population : {pays.pop} habitants</p>
              </CardBody>
            </Card>
          ))}
        </Col>
      </div>
    );
  }
}

export default Liste;
