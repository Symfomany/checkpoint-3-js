import React, { Component } from 'react';
import Provider from './Provider';
import CardItems from './CardItems'; 

import { Container, Row, Col  } from 'reactstrap';
import Formulaire from './Formulaire';

class App extends Component {



  render() {

    const { data } = this.props;
    const cardCity = data.map((el,i) => <CardItems city={el} key={`${el.title}`} {...this.props}/>)

    return (
      <Container fluid={true}>
        <Row>
          <h1>Welcome</h1>
        </Row>
        <Row>
          <Col md={9}>
            <Row>
              {cardCity}
            </Row>
          </Col>
          <Formulaire {...this.props}/>
        </Row>
      </Container>
    );
  }
}

export default Provider(App);
