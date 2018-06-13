import React, { Component } from "react";

import { Button, Container, Row, Col } from "reactstrap";

import Emitter from "../emitter";

class ListActions extends Component {
  constructor(props) {
    super(props);

    this.onAddClicked = this.onAddClicked.bind(this);
    this.onEmptyList = this.onEmptyList.bind(this);
    this.toggleAvailableOnly = this.toggleAvailableOnly.bind(this);
  }

  onAddClicked() {
    this.props.showAddForm(this);
  }

  onEmptyList() {
    this.props.emptyList(this);
  }

  toggleAvailableOnly() {
    Emitter.emit("availableOnly");
  }

  render() {
    return (
      <Container>
        <Row>
          <Col>
            <Button
              color={this.props.addFormVisible ? "secondary" : "primary"}
              onClick={this.onAddClicked}
            >
              {this.props.addFormVisible ? "Fermer" : "Ajouter une capitale"}
            </Button>
          </Col>
          <Col>
            <Button
              type="checkbox"
              color="outline-primary"
              onClick={this.toggleAvailableOnly}
            >
              {console.log(this.props.availableOnly)}
              {this.props.availableOnly ? "Voir: Disponible" : "Voir: Tous"}
            </Button>
          </Col>
          <Col className="text-right">
            <Button color="outline-danger" onClick={this.onEmptyList}>
              Vider la liste
            </Button>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default ListActions;
