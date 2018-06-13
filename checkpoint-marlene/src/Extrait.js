import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Extrait.css";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Button,
  Label,
  Input,
  FormGroup
} from "reactstrap";
import datas from "./datas.json";

class Extrait extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      infos: datas
    };
    // bind
    this.changerVisible = this.changerVisible.bind(this);
    this.search = this.search.bind(this);
  }
  // actions
  changerVisible() {
    this.setState({
      visible: !this.state.visible
    });
    if (this.state.visible === true) {
      this.setState({
        infos: this.state.infos.slice(0, 2)
      });
    } else {
      this.setState({
        infos: datas
      });
    }
  }

  search(elt) {
    this.setState({
      search: elt.target.value
    });
    if (elt.target.value.length < 3) {
      this.setState({
        infos: datas
      });
    } else {
      const regex = new RegExp(elt.target.value, "i");
      const tab = this.state.infos.filter(x => regex.test(x.title));
      this.setState({
        infos: tab
      });
    }
  }

  render() {
    return (
      <div className="container fluid">
        <div className="row">
          <div className="col-12">
            <input
              className="rechercher"
              type="search"
              onChange={this.search}
              required
              placeholder="Chercher une ville..."
            />
            <div>
              {this.state.infos.map(info => (
                <Card>
                  <CardImg top width="100%" src={info.img} />
                  <CardBody>
                    <CardTitle>{info.title}</CardTitle>
                    <CardText>{info.description}</CardText>
                    <CardText>
                      <p>Latitude: {info.lat} </p>
                      <p>Longitude: {info.lng} </p>
                      <p>Population: {info.pop} habitants</p>
                    </CardText>
                    <FormGroup check>
                      <Label check>
                        <Input type="checkbox" required /> Disponible
                      </Label>
                    </FormGroup>
                    <Button onClick={this.changerVisible}>Next</Button>
                  </CardBody>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Extrait;
