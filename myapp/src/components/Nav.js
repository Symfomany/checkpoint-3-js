import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom'
import * as routes from './routes'
class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div>
                <Link to={routes.HOME}>List</Link>
                <Link to={routes.ADD}>Ajouter Ville</Link>
            </div>
        );
    }
}

export default withRouter(Nav);