import React, { Component } from "react";
import Carte from "./Carte";
import { Container, Row, Col } from "reactstrap";

class Liste extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    //console.log(this.props);
    return (
      <div>
        <h1 className="text-center">Liste des villes :</h1>
        <Container>
          <Row>
            {this.props.cities.map(city => (
              <Col key={city.id} xs="3">
                <Carte key={city.id} datas={city} supprimerVille={this.props.supprimerVille}/>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    );
  }
}

export default Liste;
