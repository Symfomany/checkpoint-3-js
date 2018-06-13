import React from "react";

import { ListContainer } from "../styled/containers";

import CapitalCard from "./CapitalCard";

const CapitalsList = props => (
  <ListContainer>
    {props.data.map(item => <CapitalCard data={item} key={item.id} />)}
  </ListContainer>
);

export default CapitalsList;
