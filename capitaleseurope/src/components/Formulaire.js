import React, { Component } from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";

class Formulaire extends Component {
  constructor(props) {
    super(props);
    this.state = {
      disponible: false
    };
    this.handleEvent = this.handleEvent.bind(this);
  }

  handleEvent(e) {
    e.target.id === "disponible"
      ? this.setState({ disponible: !this.state.disponible })
      : this.setState({
          [e.target.id]: e.target.value,
          id: Date.parse(new Date())
        });
  }

  ajouter(e) {
    e.preventDefault();
    this.props.ajouter(this.state);
  }

  render() {
    return (
      <Form>
        <FormGroup>
          <Label for="title">Nom de la Capitale</Label>
          <Input
            type="text"
            name="title"
            id="title"
            placeholder="Paris, Berlin... "
            onChange={e => this.handleEvent(e)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="description">Description</Label>
          <Input
            type="textarea"
            name="description"
            id="description"
            onChange={e => this.handleEvent(e)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="img">URL Image</Label>
          <Input
            type="text"
            name="img"
            id="img"
            placeholder="https://www.visitstock... "
            onChange={e => this.handleEvent(e)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="lng">Longitude</Label>
          <Input
            type="text"
            name="lng"
            id="lng"
            placeholder="59.3... "
            onChange={e => this.handleEvent(e)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="lat">Latitude</Label>
          <Input
            type="text"
            name="lat"
            id="lat"
            placeholder="18.1... "
            onChange={e => this.handleEvent(e)}
          />
        </FormGroup>
        <FormGroup check>
          <Label check for="disponible">
            <Input
              type="checkbox"
              id="disponible"
              name="disponible"
              onClick={e => this.handleEvent(e)}
            />{" "}
            Disponible
          </Label>
        </FormGroup>
        <Button type="submit" onClick={e => this.ajouter(e)}>
          Ajouter
        </Button>
      </Form>
    );
  }
}

export default Formulaire;
