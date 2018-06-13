import React, { Component } from 'react';
import {
    Card, Button, CardImg, CardTitle, CardText, CardDeck, CardBody
} from 'reactstrap';


class Cards extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <div className="container-fluid">
                <h1>European Capitals</h1>
                <div className="row">
                    {this.props.capitales.map((capitale, key) =>
                        <CardDeck className="col-3" key={capitale.id}>
                            <Card className="mb-4">
                                <CardBody >
                                    <CardTitle>{capitale.title}</CardTitle>
                                </CardBody>
                                <CardImg top width="100%" src={capitale.img} alt="Card image cap" />
                                <CardBody>
                                    <CardText>{capitale.description}</CardText>
                                    <hr />
                                    <CardText>Latitude : {capitale.lat}</CardText>
                                    <hr />
                                    <CardText>Longitude : {capitale.lng}</CardText>
                                    <hr />
                                    <CardText>Population : {capitale.pop}</CardText>
                                    <Button id={capitale.id} color="danger" type="submit" className="float-right" onClick={this.props.delete} > Delete</Button>
                                </CardBody>
                            </Card>

                        </CardDeck>)}
                </div>
            </div>
        );
    }
}

export default Cards;