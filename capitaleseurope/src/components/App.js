import React, { Component } from "react";
import "./App.css";
import {
  Container,
  Row,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle
} from "reactstrap";
import datas from "../datas.json";
import Formulaire from "./Formulaire";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      capitales: datas
    };
    this.ajouter = this.ajouter.bind(this);
  }

  ajouter(datas) {
    let capitales = this.state.capitales.concat(datas);
    this.setState({ capitales });
  }

  render() {
    return (
      <Container>
        <Row>
          <header>
            <h1>Les Capitales Européennes</h1>
          </header>
        </Row>
        <Row>
          {this.state.capitales.map(capitale => (
            <div>
              <Card className="capitalCards">
                <CardImg
                  top
                  width="100%"
                  src={capitale.img}
                  alt="Card image cap"
                />
                <CardBody>
                  <CardTitle>{capitale.title}</CardTitle>
                  <CardText>{capitale.description}</CardText>
                </CardBody>
              </Card>
            </div>
          ))}
        </Row>
        <Formulaire ajouter={this.ajouter} />
      </Container>
    );
  }
}

export default App;
