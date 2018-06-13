import React, { Component } from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Input, FormGroup, Label, Col,Button
} from 'reactstrap';

class CardItems extends Component {
    
    render() {

        const { city } = this.props;

        return (
            <Col md={6}>
                <Card>
                    <CardImg top width="100%" height="200px" src={city.img} alt={city.img} />
                    <CardBody>
                        <CardTitle>{city.title}</CardTitle>
                        <CardSubtitle>{city.population}</CardSubtitle>
                        <CardText>{city.description}</CardText>
                        <FormGroup check>
                            <Label check>
                                <Input type="checkbox" checked={city.disponible}/>{' '}
                                Disponible
                            </Label>
                        </FormGroup>
                        <Button onClick={() => this.props.delete(city)}>Delete</Button>
                    </CardBody>
                </Card>
            </Col>
        );
    }
}

export default CardItems;
