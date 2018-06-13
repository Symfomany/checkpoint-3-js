import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Formulaire.css";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";

class Formulaire extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <Form>
              <h3>Formulaire</h3>
              <h4>Ajouter une ville</h4>

              <FormGroup>
                <Label for="exampleTitre">Ajouter un titre:</Label>
                <Input
                  type="name"
                  name="title"
                  id="exampleTitle"
                  placeholder=""
                />
              </FormGroup>
              <FormGroup>
                <Label for="exampleTitre">Longitude:</Label>
                <Input type="name" name="lg" id="exampleTitle" placeholder="" />
              </FormGroup>
              <FormGroup>
                <Label for="exampleTitre">Latitude:</Label>
                <Input
                  type="name"
                  name="lng"
                  id="exampleTitle"
                  placeholder=""
                />
              </FormGroup>
              <FormGroup>
                <Label for="exampleUrl">Url de la photo: </Label>
                <Input type="url" name="url" id="exampleUrl" placeholder="" />
              </FormGroup>
              <FormGroup>
                <Label for="exampleText">Votre description...</Label>
                <Input type="textarea" name="text" id="exampleText" />
              </FormGroup>
              <FormGroup>
                <Label for="exampleFile">Choisir un fichier:</Label>
                <Input type="file" name="file" id="exampleFile" />
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input type="checkbox" /> Disponible
                </Label>
              </FormGroup>
              <Button className="btn btn-success">Submit</Button>
            </Form>
          </div>
        </div>
      </div>
    );
  }
}

export default Formulaire;
