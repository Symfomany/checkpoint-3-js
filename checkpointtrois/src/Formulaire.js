import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";

class Formulaire extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      pop: "",
      lat: "",
      lng: "",
      img: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.title === "") {
      alert("Veuillez choisir un Titre");
    }
    this.props.addCapitale(this.state);
  }
  render() {
    return (
      <div className="formulaire">
        {" "}
        <h1 className="text-center">Ajouter une capitale</h1>
        <Form onSubmit={this.handleSubmit} className="m-5">
          <FormGroup>
            <Label for="titre">Nom</Label>
            <Input
              type="text"
              name="title"
              placeholder="Nom de la capitale"
              onChange={e => this.setState({ title: e.target.value })}
              required
            />
          </FormGroup>
          <FormGroup>
            <Label for="description">Descritption</Label>
            <Input
              type="textarea"
              name="description"
              onChange={e => this.setState({ description: e.target.value })}
            />
          </FormGroup>

          <FormGroup>
            <Label for="img">Photo</Label>
            <Input
              type="text"
              name="img"
              onChange={e =>
                this.setState({
                  img: e.target.value
                })
              }
            />
          </FormGroup>

          <FormGroup>
            <Label for="lat">Population</Label>
            <Input
              type="text"
              name="pop"
              onChange={e =>
                this.setState({
                  pop: e.target.value
                })
              }
            />
          </FormGroup>

          <FormGroup>
            <Label for="lat">Latitude</Label>
            <Input
              type="text"
              name="lat"
              onChange={e =>
                this.setState({
                  lat: e.target.value
                })
              }
            />
          </FormGroup>

          <FormGroup>
            <Label for="lat">Longitude</Label>
            <Input
              type="text"
              name="lng"
              onChange={e =>
                this.setState({
                  lng: e.target.value
                })
              }
            />
          </FormGroup>

          <FormGroup check>
            <Label check for="disponible">
              <Input type="checkbox" /> Dispo
              <Input type="checkbox" /> Non Dispo
            </Label>
          </FormGroup>
          <Button type="submit">Valider</Button>
        </Form>
      </div>
    );
  }
}

export default Formulaire;
