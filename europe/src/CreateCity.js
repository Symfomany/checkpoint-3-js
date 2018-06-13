import React from "react";
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

const CreateCity = props => {
  return <Row className="d-flex justify-content-center">
      <Col xs="12" md="10">
        <Form>
          <FormGroup>
            <Label for="Title">Title</Label>
            <Input type="text" name="title" id="title" placeholder="Ex: Paris" />
            <FormText color="muted">Enter a city's name</FormText>
          </FormGroup>
          <FormGroup>
            <Label for="Description">Description</Label>
            <Input type="textarea" name="description" id="description" placeholder="Ex: pigeons' city, invaded by horrible animals we called 'human'. Some of them are escorted by dogs, another dangerous living being. If neccessary, poop on their vehicules." />
            <FormText color="muted">Enter a description</FormText>
          </FormGroup>
          <FormGroup>
            <Label for="Population">Population</Label>
            <Input type="number" name="pop" id="pop" placeholder="Ex : 100000" step="1000" />
            <FormText color="muted">Enter the population</FormText>
          </FormGroup>
          <FormGroup>
            <Label for="Longitude">Longitude</Label>
            <Input type="number" name="lng" id="lng" step="0.1" placeholder="Coordinates" />
            <FormText color="muted">
              Enter longitude, please ask Wikipedia for that.
            </FormText>
          </FormGroup>
          <FormGroup>
            <Label for="Latitude">Latitude</Label>
            <Input type="number" name="lat" id="lat" step="0.1" placeholder="Coordinates" />
            <FormText color="muted">
              Enter latitude, please ask Wikipedia for that.
            </FormText>
          </FormGroup>
          <FormGroup>
            <Label for="Image">Image</Label>
            <Input type="file" name="img" id="img" />
            <FormText color="muted">
              Enter a valide image, but please avoid Google Image.
            </FormText>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type="checkbox" /> If checked, disponibility is switch to "on".
            </Label>
          </FormGroup>
          <Button color="success" onClick={props.isSubmit}>
            Submit
          </Button>
        </Form>
      </Col>
    </Row>;
};

export default CreateCity;
