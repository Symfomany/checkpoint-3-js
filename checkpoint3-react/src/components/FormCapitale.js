import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

// 0. j'initialise mes données dans le state (obligatoire ?)
// 1. je crée un formulaire
// 2. je crée une fonction handleSubmit qui prend ma fonction addCard en paramètre avec les données du state de FormCapitale
// 3. Sur chaque id (id des input dans mon formulaire) je change la valeur par la nouvelle valeur entrée

class FormCapitale extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      lng: "",
      lat: "",
      pop: "",
      image: "",
      disponible: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.addCard(this.state);
  }

  handleChange(e) {
    this.setState({
      [e.target.id]: e.target.value
    });
  }

  render() {
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <FormGroup>
            <Label for="title">Title</Label>
            <Input
              id="title"
              type="text"
              name="title"
              placeholder="Title"
              onChange={e => this.handleChange(e)}
            />
          </FormGroup>
          <FormGroup>
            <Label for="lat">Latitude</Label>
            <Input
              id="lat"
              type="text"
              name="lat"
              placeholder="Latitude"
              onChange={e => this.handleChange(e)}
            />
          </FormGroup>
          <FormGroup>
            <Label for="lng">Longitude</Label>
            <Input
              type="text"
              id="lng"
              name="lng"
              placeholder="Longitude"
              onChange={e => this.handleChange(e)}
            />
          </FormGroup>
          <FormGroup>
            <Label for="pop">Population</Label>
            <Input
              type="text"
              id="pop"
              name="pop"
              placeholder="Population"
              onChange={e => this.handleChange(e)}
            />
          </FormGroup>
          <FormGroup>
            <Label for="description">Description</Label>
            <Input
              type="textarea"
              id="description"
              name="description"
              placeholder="Description"
              onChange={e => this.handleChange(e)}
            />
          </FormGroup>
          <FormGroup>
            <Label for="exampleUrl">Image</Label>
            <Input
              type="url"
              name="img"
              id="img"
              placeholder="Image url"
              onChange={e => this.handleChange(e)}
            />
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input
                type="checkbox"
                name="disponible"
                id="disponible"
                onChange={e => this.setState({ disponbile: e.target.checked })}
              />
              Disponible
            </Label>
          </FormGroup>
          <Button color="secondary" type="submit">
            Envoyer
          </Button>
        </Form>
      </div>
    );
  }
}

export default FormCapitale;
