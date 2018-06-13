import React from "react";
import SelectDisplayCardsForms from "./SelectDisplayCardsForms"


const SelectDisplayCards = props => {
  return (
    <div><SelectDisplayCardsForms number={2} numberCities={props.numberCities} />
    <SelectDisplayCardsForms number={4} numberCities={props.numberCities} />
    <SelectDisplayCardsForms number={6} numberCities={props.numberCities} />
    <SelectDisplayCardsForms number={8} numberCities={props.numberCities} />
    <SelectDisplayCardsForms number={10} numberCities={props.numberCities} /></div>
  );
};

export default SelectDisplayCards;
