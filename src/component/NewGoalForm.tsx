import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const NewGoalForm = () => {

  return (
    <Form>
      <FormGroup>
        <Label for="goalName">Название цели</Label>
        <Input type="text" name="goalName" id="goalName" placeholder="Название цели" />
      </FormGroup>
      <FormGroup>
        <Label for="goalUnits">Ед. измерения</Label>
        <Input type="text" name="units" id="goalUnits" placeholder="Ед. измерения" />
      </FormGroup>
      <FormGroup>
        <Label for="goalValue">Цель на неделю</Label>
        <Input type="text" name="goalValue" id="goalValue" placeholder="Цель на неделю" />
      </FormGroup>
      <FormGroup>
        <Label for="goalCurrent">Сделано</Label>
        <Input type="text" name="goalValue" id="goalCurrent" placeholder="Сделано" />
      </FormGroup>
      <Button color="primary">Добавить</Button>
    </Form>
  );
}

export default NewGoalForm;