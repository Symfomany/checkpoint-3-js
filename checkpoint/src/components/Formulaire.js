import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';


class Formulaire extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            description: "",
            lng: "",
            lat: "",
            pop: "",
            image: "",
            disponible: false
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log(this.state);
        this.props.addCapitale(this.state)
        e.target.reset();
    }


    render() {
        return (
            <div className="container-fluid">
                <h1>Add a new European capital</h1>
                <Form className="col-4" onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Label>Title</Label>
                        <Input type="text" name="title" placeholder="Title" onChange={e => this.setState({ title: e.target.value })} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleText">Description</Label>
                        <Input type="textarea" name="description" onChange={e => this.setState({ description: e.target.value })} />
                    </FormGroup>
                    <FormGroup>
                        <Label>Longitude</Label>
                        <Input type="text" name="lng" placeholder="Longitude" onChange={e => this.setState({ lng: e.target.value })} />
                    </FormGroup>
                    <FormGroup>
                        <Label>Latitude</Label>
                        <Input type="text" name="lat" placeholder="Latitude" onChange={e => this.setState({ lat: e.target.value })} />
                    </FormGroup>
                    <FormGroup>
                        <Label>Population</Label>
                        <Input type="text" name="pop" placeholder="Population" onChange={e => this.setState({ pop: e.target.value })} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleUrl">Image</Label>
                        <Input type="url" name="image" placeholder="Url of an image" onChange={e => this.setState({ image: e.target.value })} />
                    </FormGroup>
                    <FormGroup check>
                        <Label check>
                            <Input type="checkbox" name="disponible" onChange={e => this.setState({ disponbile: e.target.checked })} />
                            Disponible
                        </Label>
                    </FormGroup>
                    <FormGroup>
                        <Button color="primary" type="submit">primary</Button>
                    </FormGroup>
                </Form>
            </div>
        );
    }
}

export default Formulaire;