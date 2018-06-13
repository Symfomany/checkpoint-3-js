import React, { Component } from "react";
import {
  Form,
  Input,
  FormGroup,
  Label,
  ButtonGroup,
  Button,
  Row,
  Col
} from "reactstrap";

class Formulaire extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cSelected: true
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onCheckboxBtnClick = this.onCheckboxBtnClick.bind(this);
  }
  handleSubmit(event) {
    event.preventDefault();
    console.log("coucou");
    let uniqueId = Math.random()
      .toString(36)
      .substr(2, 9);
    let newCity = {
      title: event.target.title.value,
      description: event.target.description.value,
      id: uniqueId,
      img: event.target.img.value,
      pop: event.target.pop.value,
      lat: event.target.lat.value,
      lng: event.target.lng.value,
      disponible: this.state.cSelected
    };
    this.props.addCity(newCity);
    console.log(newCity);
  }
  onCheckboxBtnClick(event) {
    this.state.cSelected === true
      ? this.setState({ cSelected: false })
      : this.setState({ cSelected: true });
  }

  render() {
    return (
      <Row>
        <Col>
          <h1 className="text-center mt-5">Formulaire de saisie</h1>
          <Form
            onSubmit={this.handleSubmit}
            id="addACity"
            noValidate
            className="mb-5"
          >
            <FormGroup>
              <Label for="title">Nom de la ville</Label>
              <Input
                type="text"
                placeholder="Nom de la ville"
                id="title"
                defaultValue="Ville-test"
              />
            </FormGroup>
            <FormGroup>
              <Label for="Description">description</Label>
              <Input
                type="textarea"
                id="description"
                defaultValue="Petite description"
              />
            </FormGroup>
            <FormGroup>
              <Label for="title">Latitude</Label>
              <Input
                type="number"
                placeholder="12.23"
                id="lat"
                defaultValue="10"
              />
            </FormGroup>
            <FormGroup>
              <Label for="title">Longitude</Label>
              <Input
                type="number"
                placeholder="12.23"
                id="lng"
                defaultValue="10"
              />
            </FormGroup>
            <FormGroup>
              <Label for="title">Population</Label>
              <Input
                type="number"
                placeholder="10000"
                id="pop"
                defaultValue="10000"
              />
            </FormGroup>
            <FormGroup>
              <Label for="img">Photo</Label>
              <Input
                type="url"
                placeholder="http://unsplash.com/monimage.jpg"
                id="img"
                defaultValue="https://www.cpe.fr/wp-content/uploads/2017/05/2017_Home_visuel_5raisons_lyon.jpg"
              />
            </FormGroup>
            <ButtonGroup>
              <Button
                color={this.state.cSelected === true ? "primary" : "secondary"}
                onClick={() => this.onCheckboxBtnClick()}
                active={this.state.cSelected}
              >
                {this.state.cSelected === true
                  ? "Disponible"
                  : "non disponible"}
              </Button>
            </ButtonGroup>
            <Input
              type="submit"
              defaultValue="Valider"
              className="btn btn-primary mt-4"
            />
          </Form>
        </Col>
      </Row>
    );
  }
}

export default Formulaire;
