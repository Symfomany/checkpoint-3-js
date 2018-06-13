import React from "react"
import { FormGroup, Label, Input } from "reactstrap";

const SelectDisplayClassement = (props) => {
    return (
        <FormGroup>
          <Label for="classement">Classer par ordre</Label>
          <Input type="select" name="classement" id="classement" onChange={e => props.changeOrder(e)}>
            <option value={0} selected>Order by default</option>
            <option value={1}>Alphabetical order</option>
            <option value={2}>Anti-alphabetical order</option>
            <option value={3}>Number of population (decrease)</option>
            <option value={4}>Number of population (increase)</option>
          </Input>
        </FormGroup>
    )
}

export default SelectDisplayClassement