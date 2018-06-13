import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const styles = theme => ({
  card: {
    maxWidth: 400
  },
  button: {
    margin: theme.spacing.unit
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    marginBottom: 16,
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
});

class Liste extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.container}>
        <Typography className={classes.title} color="textSecondary">
          Liste des Capitales
        </Typography>
        <ul>
          {this.props.villes.map((ville, index) => (
            <Card className={classes.card} key={index}>
              <CardContent>
                <Typography variant="headline" component="h2">
                  {ville.title}
                </Typography>
                <Typography component="p">
                  Latitude : {ville.lat} Longitude : {ville.lng}
                </Typography>
                <button
                  type="submit"
                  onClick={() => this.props.villesDelete(index)}
                >
                  X
                </button>
              </CardContent>
              <CardActions>
                <Button size="small">Lire plus</Button>
              </CardActions>
            </Card>
          ))}
        </ul>
      </div>
    );
  }
}

Liste.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Liste);
