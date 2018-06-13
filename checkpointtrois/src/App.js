import React, { Component } from "react";
import datas from "./datas.json";
import { Container, Row, Col } from "reactstrap";
import "./Style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Formulaire from "./Formulaire";
import Liste from "./Liste";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pays: datas
    };
    this.add = this.add.bind(this);
  }

  add(newCapitale) {
    this.setState({
      pays: [...this.state.pays, newCapitale]
    });
  }

  render() {
    return (
      <div className="fond">
        <Container>
          <Row>
            <Liste pays={this.state.pays} />
          </Row>
          <Col>
            <Formulaire addCapitale={this.add} />
          </Col>
        </Container>
      </div>
    );
  }
}

export default App;
