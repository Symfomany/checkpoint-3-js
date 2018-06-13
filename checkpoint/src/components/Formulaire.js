import React, { Component } from 'react';


class Formulaire extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            description: "",
            lat: "",
            lng: "",
            pop: "",
            img: "",
            disponible: ""
        };
        this.newCity = this.newCity.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    newCity(e) {
        this.setState({
            title: e.target.value,
            description: e.target.value,
            lat: e.target.value,
            lng: e.target.value,
            pop: e.target.value,
            img: e.target.value,
            disponible: e.target.checked
        })
    }

    handleSubmit(e) {
        e.preventDefault()
        console.log(this.state);
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label htmlFor=""> Titre</label>
                <input type="text" onChange={this.newCity} id="title" /> <br />
                <label htmlFor="" > Description</label>
                <input type="text" onChange={this.newCity} id="description" /><br />
                <label htmlFor="" > Longitude</label>
                <input type="text" onChange={this.newCity} id="lat" /><br />
                <label htmlFor="">Latitude</label>
                <input type="text" onChange={this.newCity} id="lng" /><br />
                <label htmlFor="">Population</label>
                <input type="text" onChange={this.newCity} id="pop" /><br />
                <label htmlFor="">Image</label>
                <input type="text" onChange={this.newCity} id="img" /><br />
                <label htmlFor="">Disponible</label>
                <input type="checkbox" onChange={this.newCity} id="disponible" /><br />
                <input type="submit" value="Envoyer" />
            </form>

        );
    }
}

export default Formulaire;