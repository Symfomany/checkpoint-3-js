import React, { Component } from "react";
import {
  Row,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  Col
} from "reactstrap";

class CreateCity extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      pop: undefined,
      lng: undefined,
      lat: undefined,
      disponible: false,
      img:
        "http://img.over-blog-kiwi.com/1/28/16/96/20141111/ob_c2d729_il1jaw.gif"
    };
  }
  handleSubmit = e => {
    e.preventDefault();
    this.props.addCity(this.state);
  };

  handleEvent = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    });
  }

  render() {
    return <Row className="d-flex justify-content-center">
        <Col xs="12" md="10">
          <Form onSubmit={this.handleSubmit} name="formulaire">
            <FormGroup>
              <Label for="Title">Title</Label>
              <Input type="text" name="title" id="title" placeholder="Ex: Paris" onChange={this.handleEvent} />
              <FormText color="muted">Enter a city's name</FormText>
            </FormGroup>
            <FormGroup>
              <Label for="Description">Description</Label>
              <Input type="textarea" name="description" id="description" placeholder="Ex: pigeons' city, invaded by horrible animals we called 'human'. Some of them are escorted by dogs, another dangerous living being. If neccessary, poop on their vehicules." onChange={this.handleEvent} />
              <FormText color="muted">Enter a description</FormText>
            </FormGroup>
            <FormGroup>
              <Label for="Population">Population</Label>
              <Input type="number" name="pop" id="pop" placeholder="Ex : 100000" step="1000" onChange={this.handleEvent} />
              <FormText color="muted">Enter the population</FormText>
            </FormGroup>
            <FormGroup>
              <Label for="Longitude">Longitude</Label>
              <Input type="number" name="lng" id="lng" step="0.1" placeholder="Coordinates" onChange={this.handleEvent} />
              <FormText color="muted">
                Enter longitude, please ask Wikipedia for that.
              </FormText>
            </FormGroup>
            <FormGroup>
              <Label for="Latitude">Latitude</Label>
              <Input type="number" name="lat" id="lat" step="0.1" placeholder="Coordinates" onChange={this.handleEvent} />
              <FormText color="muted">
                Enter latitude, please ask Wikipedia for that.
              </FormText>
            </FormGroup>
            <FormGroup>
              <Label for="Image">Image</Label>
              <Input type="file" name="imgfake" id="imgfake" />
              <FormText color="muted">
                Enter a valide image, but please avoid Google Image.
              </FormText>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input type="checkbox" name="disponible" id="disponible" value="true" onChange={this.handleEvent} /> If checked, disponibility is switch to "on".
              </Label>
            </FormGroup>
            <Button color="success">Submit</Button>
          </Form>
        </Col>
      </Row>;
  }
}

export default CreateCity;
