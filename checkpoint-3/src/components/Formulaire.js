import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";
import Switch from "@material-ui/core/Switch";
import purple from "@material-ui/core/colors/purple";
import FormControlLabel from "@material-ui/core/FormControlLabel";
// import InputAdornment from "@material-ui/core/InputAdornment";

const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  formControl: {
    margin: theme.spacing.unit
  },
  withoutLabel: {
    marginTop: theme.spacing.unit * 3
  },
  button: {
    margin: theme.spacing.unit
  },
  colorSwitchBase: {
    color: purple[300],
    "&$colorChecked": {
      color: purple[500],
      "& + $colorBar": {
        backgroundColor: purple[500]
      }
    }
  },
  colorBar: {},
  colorChecked: {},
  iOSSwitchBase: {
    "&$iOSChecked": {
      color: theme.palette.common.white,
      "& + $iOSBar": {
        backgroundColor: "#52d869"
      }
    },
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
      easing: theme.transitions.easing.sharp
    })
  },
  iOSChecked: {
    transform: "translateX(15px)",
    "& + $iOSBar": {
      opacity: 1,
      border: "none"
    }
  },
  iOSBar: {
    borderRadius: 13,
    width: 42,
    height: 26,
    marginTop: -13,
    marginLeft: -21,
    border: "solid 1px",
    borderColor: theme.palette.grey[400],
    backgroundColor: theme.palette.grey[50],
    opacity: 1,
    transition: theme.transitions.create(["background-color", "border"])
  },
  iOSIcon: {
    width: 24,
    height: 24
  },
  iOSIconChecked: {
    boxShadow: theme.shadows[1]
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
          <FormControl
            fullWidth
            className={(classes.margin, classes.formControl)}
          >
            <InputLabel htmlFor="description">Description</InputLabel>
            <Input
              name="description"
              id="description"
              onChange={this.handleDesc}
            />
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="longitude">Longitude</InputLabel>
            <Input type="text" id="longitude" onChange={this.handleLong} />
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="latitude">Latitude</InputLabel>
            <Input type="text" id="latitude" onChange={this.handleLat} />
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="population">Population</InputLabel>
            <Input
              type="text"
              placeholder="Population"
              id="population"
              onChange={this.handlePop}
            />
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="img">Image</InputLabel>
            <Input
              type="text"
              id="img"
              placeholder="url de l'image"
              onChange={this.handleImg}
            />
          </FormControl>
          <FormControl className={classes.formControl}>
            <FormControlLabel
              control={
                <Switch
                  checked={this.state.checkedA}
                  value="checkedA"
                  classes={{
                    switchBase: classes.colorSwitchBase,
                    checked: classes.colorChecked,
                    bar: classes.colorBar
                  }}
                />
              }
              label="Active"
            />
          </FormControl>
        </form>
        <Button
          type="submit"
          variant="outlined"
          color="primary"
          className={classes.button}
        >
          Ajouter une Capitale
        </Button>
      </div>
    );
  }
}

Formulaire.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Formulaire);
