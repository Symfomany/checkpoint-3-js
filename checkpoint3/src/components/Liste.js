import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";
import Datas from "../json/datas";

class Liste extends Component {
  constructor(props) {
    super(props);
    this.state = {
      datas: Datas
    };
    this.deleteCard=this.deleteCard.bind(this);
  }

deleteCard(e){
  console.log(e.target.id);
  const id = e.target.id
  const initialDatas = this.state.datas
  const newDatas = initialDatas.filter(elt => elt.id !== Number(id));
  this.setState({datas: newDatas})
}

  render() {
    const dataState = this.state.datas;
    const newData = this.props.newDatas;
    return (
      <div>
        <div className="container">
          <p>{newData}</p>
          <div className="row">
            {dataState.map(elt => (
              <div className="col-3">
                <Card>
                  <CardImg top width="100%" src={elt.img} alt={elt.title} />
                  <CardBody>
                    <CardTitle>{elt.title}</CardTitle>
                    <CardSubtitle>
                      Latitude : {elt.lat}, longitude: {elt.lng}
                    </CardSubtitle>
                    <CardText>
                      Population : {elt.pop}
                      <br />
                      {elt.description}
                    </CardText>
                    <p>
                      Disponible :{" "}
                      {elt.disponible ? (
                        <i className="fas fa-check" />
                      ) : (
                        <i className="fas fa-times" />
                      )}
                    </p>
                    <Button id={elt.id}  onClick={this.deleteCard}>Supprimer </Button>
                  </CardBody>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Liste;
