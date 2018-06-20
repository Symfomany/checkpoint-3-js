import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Button
} from "reactstrap";

// 0. je fais un stateless componant car sans constructor
// 1. je vais chercher mes datas dans App.js
// 2. je fais un .map pour parcourir chaque données
// 3. j'affiche chaque données dans ma card bootstrap

const Cards = ({ datas, deleteCard }) => {
  return (
    <div className="container-fluid">
      {datas.map((capitale, id) => (
        <Card key={capitale.id}>
          <CardImg
            alt="Card image cap"
            style={{ width: "100%" }}
            src={capitale.img}
          />
          <CardBody onSubmit={deleteCard}>
            <CardTitle>{capitale.title}</CardTitle>
            <CardText>Latitude: {capitale.lat}</CardText>
            <CardText>Longitude: {capitale.lng}</CardText>
            <CardText>Population: {capitale.pop}</CardText>
            <CardText>{capitale.description}</CardText>
            <Button
              color="secondary"
              type="submit"
              id={capitale.id}
              onClick={deleteCard}
            >
              Supprimer
            </Button>
          </CardBody>
        </Card>
      ))}
    </div>
  );
};

export default Cards;

/* class Cards extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="container-fluid">
        {this.props.datas.map((capitale, id) => (
          <Card key={capitale.id}>
            <CardImg
              alt="Card image cap"
              style={{ width: "100%" }}
              src={capitale.img}
            />
            <CardBody onSubmit={this.handleSubmit}>
              <CardTitle>{capitale.title}</CardTitle>
              <CardText>Latitude: {capitale.lat}</CardText>
              <CardText>Longitude: {capitale.lng}</CardText>
              <CardText>Population: {capitale.pop}</CardText>
              <CardText>{capitale.description}</CardText>
              <Button
                color="secondary"
                type="submit"
                id={capitale.id}
                onClick={this.props.deleteCard}
              >
                Supprimer
              </Button>
            </CardBody>
          </Card>
        ))}
      </div>
    );
  }
}

export default Cards; */
