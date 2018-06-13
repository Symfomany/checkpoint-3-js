import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";

const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  formControl: {
    margin: theme.spacing.unit
  }
});

class Formulaire extends Component {
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
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleTitle = this.handleTitle.bind(this);
    this.handleDesc = this.handleDesc.bind(this);
    this.handleLong = this.handleLong.bind(this);
    this.handleLat = this.handleLat.bind(this);
    this.handlePop = this.handlePop.bind(this);
    this.handleImg = this.handleImg.bind(this);
    // this.handleDispo = this.handleDispo.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.addVilles(this.state);
  }

  handleTitle(e) {
    this.setState({ title: e.target.value });
  }
  handleDesc(e) {
    this.setState({ description: e.target.value });
  }
  handleLong(e) {
    this.setState({ longitude: e.target.value });
  }
  handleLat(e) {
    this.setState({ latitude: e.target.value });
  }
  handlePop(e) {
    this.setState({ population: e.target.value });
  }
  handleImg(e) {
    this.setState({ img: e.target.value });
  }

  handle;
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.container}>
        <form noValidate autoComplete="off" onSubmit={this.handleSubmit}>
          <h3>Ajouter une capitale</h3>
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="title">Ville</InputLabel>
            <Input
              type="text"
              id="title"
              placeholder="Capitale"
              onChange={this.handleTitle}
            />
          </FormControl>
          <label htmlFor="description">Description</label>
          <textarea
            name="description"
            id="description"
            onChange={this.handleDesc}
          />
          <label htmlFor="longitude">Longitude</label>
          <input
            type="text"
            placeholder="Longitude"
            id="longitude"
            onChange={this.handleLong}
          />
          <label htmlFor="latitude">Latitude</label>
          <input
            type="text"
            placeholder="Latitude"
            id="latitude"
            onChange={this.handleLat}
          />
          <label htmlFor="population">Population</label>
          <input
            type="text"
            placeholder="Population"
            id="population"
            onChange={this.handlePop}
          />
          <label htmlFor="img">Image</label>
          <input
            type="text"
            id="img"
            placeholder="url de l'image"
            onChange={this.handleImg}
          />
          <label htmlFor="disponible">Disponible</label>
          <input
            type="checkbox"
            id="disponible"
            name="disponible"
            onChange={event => this.setState({ disponible: true })}
          />
          <button type="submit">Ajouter un utilisateur</button>
        </form>
      </div>
    );
  }
}

Formulaire.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Formulaire);
