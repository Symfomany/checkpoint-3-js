import React, { Component } from 'react';
import {Button} from 'reactstrap';


class ButtonRemove extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.removeCity = this.removeCity.bind(this)
    }

removeCity(e){        
    e.preventDefault();
        this.props.RemoveCity(this.state)
    }

  render() {
    return (
      <div>
       <Button onClick={this.removeCity}>supprimer</Button>

      </div>
    );
  }
}

export default ButtonRemove;
