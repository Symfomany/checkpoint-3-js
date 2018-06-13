import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

class FormItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      img: "",
      lat: 0,
      lng: 0,
      pop: 0,
      description: "",
      disponible: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.record(this.state);
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <hr />
        <h3>Ajouter une Capitale</h3>
        <FormGroup>
          <Label for="title">Title</Label>
          <Input
            type="text"
            name="title"
            id="title"
            onChange={e => this.setState({ title: e.target.value })}
          />
        </FormGroup>
        <FormGroup>
          <Label for="image">Image</Label>
          <Input
            type="url"
            name="img"
            id="img"
            onChange={e => this.setState({ img: e.target.value })}
          />
        </FormGroup>
        <FormGroup>
          <Label for="lat">Latitude</Label>
          <Input
            type="number"
            name="lat"
            id="lat"
            onChange={e => this.setState({ lat: e.target.value })}
          />
        </FormGroup>
        <FormGroup>
          <Label for="lng">Longitude</Label>
          <Input
            type="number"
            name="lng"
            id="lng"
            onChange={e => this.setState({ lng: e.target.value })}
          />
        </FormGroup>
        <FormGroup>
          <Label for="lng">Population</Label>
          <Input
            type="number"
            name="pop"
            id="pop"
            onChange={e => this.setState({ pop: e.target.value })}
          />
        </FormGroup>
        <FormGroup>
          <Label for="description">Description</Label>
          <Input
            type="textarea"
            name="description"
            id="description"
            onChange={e => this.setState({ description: e.target.value })}
          />
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input
              type="checkbox"
              name="disponible"
              onChange={e => this.setState({ disponible: true })}
            />
            Disponible
          </Label>
        </FormGroup>

        <Button>Submit</Button>
        <hr />
      </Form>
    );
  }
}

export default FormItem;
