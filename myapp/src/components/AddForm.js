import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import * as routes from './routes'
import {
    Button,
    Form,
    FormGroup,
    Label,
    Input,
    FormText
} from 'reactstrap';
class AddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    toAdd(e) {
        const {history} = this.props
        e.preventDefault()
        this
            .props
            .add(e.target)
        history.push(routes.HOME)
    }
    render() {
        return (
            <Form onSubmit={e => this.toAdd(e)}>
                <Input placeholder="img" id="img"/>
                <Input placeholder="Ville" id="title"/>
                <Input placeholder="Latitude" id="lat"/>
                <Input placeholder="Longitude" id="lng"/>
                <Input placeholder="Description" id="description"/>
                <Input placeholder="Population" id="pop"/>
                <Input type="checkbox" id="disponible" checked/>
                Disponible
                <Button type="submit">Ajouter</Button>
            </Form>
        );
    }
}

export default withRouter(AddForm);