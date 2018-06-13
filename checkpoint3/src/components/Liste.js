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


class Liste extends Component {
  constructor(props) {
    super(props);
   
   this.delete= this.delete.bind(this)
  }

  delete(e){
    // console.log(e.target.id);
    this.props.deleteCard(e.target.id)
  }


  render() {
    const dataState = this.props.datas;
  
    return (
      <div>
        <div className="container">
          
          <div className="row">
          {/* liste des villes */}
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
                    <Button id={elt.id}  onClick={this.delete}>Supprimer </Button>
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
