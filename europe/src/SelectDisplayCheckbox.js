import React from "react";
import { FormGroup, Label, Input } from "reactstrap";

const SelectDisplayCheckbox = props => {
  return (
    <FormGroup check>
      <Label check>
        <Input
          type="checkbox"
          name="available"
          id="available"
          onChange={e => props.isCheck(e)}
        />Display only available cities
      </Label>
    </FormGroup>
  );
};

export default SelectDisplayCheckbox;
