import React from "react";
import { Row, Col } from "reactstrap";
import SelectDisplayCheckbox from "./SelectDisplayCheckbox";
import SelectDisplayPopulation from "./SelectDisplayPopulation";
import SelectDisplayCards from "./SelectDisplayCards";
import SelectDisplayClassement from "./SelectDisplayClassement";

const SelectDisplay = props => {
  return (
    <Row className="d-flex justify-content-center">
      <Col xs="12" md="10">
        <SelectDisplayCheckbox isCheck={props.isCheck} />
      </Col>
      <Col xs="12" md="10">
        <SelectDisplayPopulation
          population={props.population}
          filterPop={props.filterPop}
        />
      </Col>
      <Col xs="12" md="10">
      <SelectDisplayCards numberCities={props.numberCities} />
      </Col>
      <Col xs="12" md="10">
      <SelectDisplayClassement changeOrder={props.changeOrder}/>
      </Col>
    </Row>
  );
};

export default SelectDisplay;
