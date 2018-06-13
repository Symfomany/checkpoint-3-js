import React, { Component } from 'react'

import datas from './datas.json';

class Liste extends Component {
    constructor(props) {
        super(props);
        this.state = {
            villes: datas
        };
    }


    render() {
        return (
            <ul>
                {this.state.villes.map(ville => <li>{ville.title}<br />
                    Description: {ville.description}<br />
                    Latitude: {ville.lat}<br />
                    Longitude: {ville.lng}<br />
                    Population: {ville.pop}<br />
                    Disponible: {ville.disponible === true ? true === "disponible" : false === "indisponible"}<br />
                    <img src={ville.img} alt="" /><br />
                </li>)}
            </ul>

        );
    };
}

export default Liste;