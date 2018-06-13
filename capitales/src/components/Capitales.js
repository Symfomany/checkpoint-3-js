import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText, Col, CustomInput } from 'reactstrap';


class Capitales extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            description: "",
            longitude: "",
            latitude: "",
            population: "",
            img: "",
            disponible: false
        };
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)

    }
    handleSubmit(e) {
        e.preventDefault();
        this.props.add(this.state.value)
    }


    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <Form>
                    <FormGroup row>
                        <Label sm={{ size: 1, offset: 1 }} for="title">Titre</Label>
                        <Col sm={8}>
                            <Input type="text" name="title" placeholder="Entrez un titre" value={this.state.value} onChange={this.handleChange} autoComplete="off" required />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label sm={{ size: 1, offset: 1 }} for="decription">Description</Label>
                        <Col sm={8}>
                            <Input type="textarea" name="description" placeholder="Entrez une description" value={this.state.description} onChange={this.handleChange} />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label sm={{ size: 1, offset: 1 }} for="longitude">Longitute</Label>
                        <Col sm={8}>
                            <Input type="text" name="longitude" placeholder="Entrez la longitude" value={this.state.longitude} onChange={this.handleChange} />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label sm={{ size: 1, offset: 1 }} for="latitude">Latitude</Label>
                        <Col sm={8}>
                            <Input type="text" name="latitude" placeholder="Entrez la latitude" value={this.state.latitude} onChange={this.handleChange} />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label sm={{ size: 1, offset: 1 }} for="population">Population</Label>
                        <Col sm={8}>
                            <Input type="select" name="population" placeholder="Entrez le nombre d'habitants" value={this.state.population} onChange={this.handleChange}>
                                <option>- de 1 million</option>
                                <option>1 à 8 millions</option>
                                <option>8 à 50 millions</option>
                                <option>50 à 80 millions</option>
                                <option>+ de 80 millions</option>
                            </Input>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label sm={{ size: 1, offset: 1 }} for="photoFile" >Photo</Label>
                        <Col sm={8}>
                            <CustomInput onChange={this.handleChange} value={this.state.photo} type="file" name="photoFile" placeholder="ajouter un photo" />
                        </Col>
                        <FormText color="muted">
                            Uploadez une photo
                    </FormText>
                    </FormGroup>
                    <FormGroup check>
                        <Label sm={{ size: 1, offset: 1 }} check inline>Ville visible ?
                    <Col sm={8}>
                                <Input onChange={this.handleChange} value={this.state.disponible} type="checkbox" />{' '}
                                Oui
                        </Col>
                        </Label>
                    </FormGroup>
                    <FormGroup row>
                        <Col sm={5}></Col>
                        <Col sm={7}>
                            {this.state.title.length < 3 ?
                                <Button type="submit" color="secondary" size="lg" disabled>Button</Button> :
                                <Button type="submit" color="success" size="lg">Valider</Button>}
                        </Col>
                    </FormGroup>
                </Form >
            </form>


        );
    }
}

export default Capitales;