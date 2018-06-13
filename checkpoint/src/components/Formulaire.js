import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, Col } from 'reactstrap';

class Formulaire extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            id:"",
            title:"",
            description:"",
            lat:"",
            lng:"",
            pop:"",
            disponible:false,
            img:""
         };
         this.handleSubmit = this.handleSubmit.bind(this);
         this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e){
        if(e.target.name === "disponible"){
            this.setState(prevState => ({disponible:!prevState.disponible}));
            return;
        }
        this.setState({ [e.target.name]: e.target.value })
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.update(this.state);
    }


    render() {
        return (
            <Col md={3}>
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Label for="title">Title</Label>
                        <Input id="title" type="text" name="title" placeholder="Title" onChange={this.handleChange}/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="description">Description</Label>
                        <Input id="desciption" type="textarea" name="description" placeholder="Description" onChange={this.handleChange}/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="image">Lien Image</Label>
                        <Input id="image" type="textarea" name="img" placeholder="Lien" onChange={this.handleChange}/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="population">Population</Label>
                        <Input id="population" type="text" name="pop" placeholder="Population" onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="longitude">Longitude</Label>
                        <Input id="longitude" type="text" name="lng" placeholder="GPS Longitude" onChange={this.handleChange}/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="latitude">Latitude</Label>
                        <Input id="latitude" type="text" name="lat" placeholder="GPS Latitude" onChange={this.handleChange}/>
                    </FormGroup>
                    <FormGroup check>
                        <Label check>
                            <Input type="checkbox" name="disponible" onChange={this.handleChange}/>{' '}
                            Dipsonible
                        </Label>
                    </FormGroup>
                    <Button type="submit">Create City</Button>
                </Form>
            </Col>
        );
    }
}

export default Formulaire;