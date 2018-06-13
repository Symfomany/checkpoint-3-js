import React, {Component} from 'react';
import {
    Card,
    CardBody,
    CardImg,
    CardSubtitle,
    CardText,
    CardTitle,
    Button,
    Input
} from 'reactstrap'

class Cards extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {

        const {
            img,
            title,
            lat,
            lng,
            disponible,
            pop,
            description,
            index
        } = this.props
        return (
            <Card>
                <CardImg top width="100%" src={img} alt="Card image cap"/>
                <CardBody>
                    <CardTitle>{title}</CardTitle>
                    <CardSubtitle>{pop}</CardSubtitle>
                    <CardSubtitle>Latitude : {lat}
                        Longitude : {lng}</CardSubtitle>
                    <CardText>{description}</CardText>
                    {disponible === true
                        ? <Input type="checkbox" checked/>
                        : <Input type="checkbox"/>}
                    <Button
                        onClick={e => this
                        .props
                        .delete(index)}>Supprimer</Button>
                </CardBody>
            </Card>
        );
    }
}

export default Cards;