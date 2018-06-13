import React, {Component} from 'react';
import {Form, Input, Button} from 'reactstrap'
class Filtre extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (<Input
            type="text"
            placeholder="Nombre d'habitant"
            onChange={e => this
            .props
            .filtre(e.target.value)}/>);
    }
}

export default Filtre;