import React, {Component} from 'react';
import {
    Card,
    CardBody,
    CardImg,
    CardSubtitle,
    CardText,
    CardTitle,
    Button
} from 'reactstrap'
import Cards from './Cards'
import Filtre from './Filtre';
class List extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        const {data} = this.props
        return (
            <div>
                {data.map((elt, i, arr) => <Cards
                    key={i}
                    img={elt.img}
                    lat={elt.lat}
                    lng={elt.lng}
                    description={elt.description}
                    title={elt.title}
                    pop={elt.pop}
                    disponible={elt.disponible}
                    index={i}
                    delete={this.props.delete}/>)}</div>
        );
    }
}

export default List