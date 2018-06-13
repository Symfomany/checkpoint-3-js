import React, { Component } from "react";
import { Col, Row, Button, Form, FormGroup, Label, Input } from "reactstrap";

class Formulaire extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      title: "",
      description: "",
      lgn: "",
      lat: "",
      pop: "",
      img: "",
      disponible: false
    };

    this.submitDatas = this.submitDatas.bind(this);
    this.changeDatas = this.changeDatas.bind(this);
  }
  submitDatas(e) {
    e.preventDefault();
    this.props.addCity(this.state);
  }
  //mise a jour du state à chaque ajout d'une lettre dans formulaire
  changeDatas(e) {
    // console.log(this.props.datas.length);
    this.setState({ id: this.props.dataLength });
    this.setState({ [e.target.name]: e.target.value });
  }

  onChange(e) {}
  render() {
    return (
      <div>
        <div className="container">
          <Form onSubmit={this.submitDatas}>
            <FormGroup row>
              <Label for="title" sm={2}>
                title :
              </Label>
              <Col sm={10}>
                <Input
                  onChange={this.changeDatas}
                  type="text"
                  name="title"
                  id="title"
                  placeholder="Capitale"
                />
              </Col>
            </FormGroup>

            <FormGroup row>
              <Col sm={6}>
                <Row>
                  <Label for="latitude" sm={4}>
                    latitude :
                  </Label>
                  <Col sm={8}>
                    <Input
                      onChange={this.changeDatas}
                      type="text"
                      name="lat"
                      id="latitude"
                      placeholder="Latitude"
                    />
                  </Col>
                </Row>
              </Col>
              <Col sm={6}>
                <Row>
                  <Label for="longitude" sm={4}>
                    longitude :
                  </Label>
                  <Col sm={8}>
                    <Input
                      onChange={this.changeDatas}
                      type="text"
                      name="lng"
                      id="longitude"
                      placeholder="longitude"
                    />
                  </Col>
                </Row>
              </Col>
            </FormGroup>

            <FormGroup row>
              <Label for="Description" sm={2}>
                Description
              </Label>
              <Col sm={10}>
                <Input
                  type="textarea"
                  onChange={this.changeDatas}
                  name="description"
                  id="Description"
                />
              </Col>
            </FormGroup>

            <FormGroup row>
              <Col sm={6}>
                <Row>
                  <Label for="population" sm={4}>
                    population :
                  </Label>
                  <Col sm={8}>
                    <Input
                      onChange={this.changeDatas}
                      type="number"
                      name="pop"
                      id="population"
                      placeholder="population"
                    />
                  </Col>
                </Row>
              </Col>
              <Col sm={6}>
                <Row>
                  <Label for="" sm={4}>
                    image :
                  </Label>
                  <Col sm={8}>
                    <Input
                      onChange={this.changeDatas}
                      type="text"
                      name="img"
                      id="image"
                      placeholder="image"
                    />
                  </Col>
                </Row>
              </Col>
            </FormGroup>

            <FormGroup row>
              <Label for="Disponible" sm={2}>
                Disponible
              </Label>
              <Col sm={{ size: 10 }}>
                <FormGroup check>
                  <Label check>
                    <Input
                      onChange={e=>this.setState({disponible: e.target.checked})}
                      type="checkbox"
                      id="Disponible"
                      name="disponible"
                    />{" "}
                    Disponible
                  </Label>
                </FormGroup>
              </Col>
            </FormGroup>
            <FormGroup check row>
              <Col sm={{ size: 10, offset: 2 }}>
                <Button type="submit">Submit</Button>
              </Col>
            </FormGroup>
          </Form>
        </div>
      </div>
    );
  }
}

export default Formulaire;
