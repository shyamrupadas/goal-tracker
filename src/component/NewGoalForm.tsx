import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

export const NewGoalForm = ({ handleSubmit }: any) => {

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label for="goalName">Название цели</Label>
        <Input type="text" name="goalName" id="goalName" placeholder="Название цели"/>
      </FormGroup>
      <FormGroup>
        <Label for="goalUnits">Ед. измерения</Label>
        <Input type="text" name="goalUnits" id="goalUnits" placeholder="Ед. измерения"/>
      </FormGroup>
      <FormGroup>
        <Label for="goalValue">Цель на неделю</Label>
        <Input type="text" name="goalValue" id="goalValue" placeholder="Цель на неделю"/>
      </FormGroup>
      <FormGroup>
        <Label for="goalCurrent">Сделано</Label>
        <Input type="text" name="goalCurrent" id="goalCurrent" placeholder="Сделано"/>
      </FormGroup>
      <Button color="primary">Добавить</Button>
    </Form>
  );
};