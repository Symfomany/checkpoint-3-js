import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardFooter,
  Badge
} from "reactstrap";

class Carte extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.id,
      title: this.props.datas.title,
      img: this.props.datas.img,
      lat: this.props.datas.lat,
      lng: this.props.datas.lng,
      disponible: this.props.datas.disponible,
      pop: this.props.datas.pop,
      description: this.props.datas.description
    };
    this.handleSuppr = this.handleSuppr.bind(this);
  }
  handleSuppr() {
    this.props.supprimerVille(this.state.id);
  }
  componentDidMount() {
    //console.log("Composant Monté");
    // this.setState = {
    //   title: this.params.datas.city.title,
    //   img: this.params.city.img,
    //   lat: this.props.lat,
    //   lng: this.props.lng,
    //   disponible: this.props.disponible,
    //   pop: this.props.pop,
    //   description: this.props.description
    // };
  }

  render() {
    return (
      <div>
        <Card>
          <CardImg
            top
            width="100%"
            src={this.state.img}
            alt={this.state.title}
          />
          <CardBody>
            <CardTitle>
              {this.state.title}
              <Badge
                className="ml-3"
                color={this.state.disponible ? "info" : "secondary"}
                pill
              >
                {this.state.disponible ? "Dispo" : "Non dispo"}
              </Badge>
            </CardTitle>

            <CardSubtitle>Population : {this.state.pop}</CardSubtitle>

            <CardText>{this.state.description}</CardText>
            <Badge onClick={this.handleSuppr} color="warning">
              Suppr
            </Badge>
          </CardBody>
          <CardFooter className="text-muted text-right">
            <small>
              Latitude : {this.state.lat} | Longitude : {this.state.lng}
            </small>
          </CardFooter>
        </Card>
      </div>
    );
  }
}

export default Carte;
