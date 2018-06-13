import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Col,
  Row,
  CardFooter
} from "reactstrap";

const DisplayList = props => {
  return (
    <Row className="d-flex justify-content-center">
      {props.cities.map((city, index) => (
        <Col xs="6" md="4">
          <Card color={city.disponible ? "light" : "muted"}>
            <CardImg top width="100%" src={city.img} alt={city.title} />
            <CardBody>
              <CardTitle>{city.title}</CardTitle>
              <CardSubtitle>Population : {city.pop}</CardSubtitle>
              <CardSubtitle>
                Coordonnates : {city.lat} north / {city.lng} east{" "}
              </CardSubtitle>
              <CardText>{city.description}</CardText>
              <Button color="danger" onClick={() => props.deleteCity(index)}>
                Delete
              </Button>
            </CardBody>
            {!city.disponible && (
              <CardFooter className="text-muted">Not available</CardFooter>
            )}
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default DisplayList;
