import React, { Component } from "react";

import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Container,
  Row,
  Col
} from "reactstrap";

import {
  isValidTitle,
  isValidLongitude,
  isValidLatitude,
  isValidPopulation
} from "../helpers/form";

class AddCapitalForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      description: "",
      lng: 0,
      lat: 0,
      pop: 0,
      img: "",
      disponible: true
    };

    this.onFormChange = this.onFormChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onFormChange(event) {
    event.preventDefault();
    if (event.target.name === "disponible") {
      return;
    }
    this.setState({ [event.target.name]: event.target.value });
  }

  onFormSubmit(event) {
    event.preventDefault();

    if (
      isValidTitle(this.state.title) &&
      isValidLongitude(this.state.lng) &&
      isValidLatitude(this.state.lat) &&
      isValidPopulation(this.state.pop)
    ) {
      this.props.addData(this.state);
    }
  }

  render() {
    return (
      <Container>
        <hr />
        <Row>
          <Col>
            <Form onChange={this.onFormChange} onSubmit={this.onFormSubmit}>
              <FormGroup>
                <Label for="title">Titre</Label>
                <Input type="text" name="title" id="title" />
              </FormGroup>
              <FormGroup>
                <Label for="lng">Longitude</Label>
                <Input
                  type="number"
                  name="lng"
                  id="lng"
                  min="-180"
                  max="180"
                  step="0.01"
                />
              </FormGroup>
              <FormGroup>
                <Label for="lat">Latitude</Label>
                <Input
                  type="number"
                  name="lat"
                  id="lat"
                  min="-90"
                  max="90"
                  step="0.01"
                />
              </FormGroup>
              <FormGroup>
                <Label for="pop">Population</Label>
                <Input type="number" name="pop" id="pop" min="0" step="1" />
              </FormGroup>
              <FormGroup>
                <Label for="description">Description</Label>
                <Input type="textarea" name="description" id="description" />
              </FormGroup>
              <FormGroup>
                <Label for="img">Image</Label>
                <Input type="file" name="img" id="img" />
              </FormGroup>
              <FormGroup>
                <Label check>
                  <Input name="disponible" type="checkbox" />
                  Disponible
                </Label>
              </FormGroup>
              <Button color="primary">Submit</Button>
            </Form>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default AddCapitalForm;
