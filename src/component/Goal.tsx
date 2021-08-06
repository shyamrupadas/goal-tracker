import React from 'react';
import { Button } from 'reactstrap';

const Goal = ({ id, goalName, units, goalValue, currentValue, deleteGoal }: any) => {

  return (
    <tr>
      <td>{goalName}</td>
      <td>{units}</td>
      <td>{goalValue}</td>
      <td>{currentValue}</td>
      <td>-</td>
      <td><Button outline color="secondary" size="sm" onClick={() => deleteGoal(id)}>x</Button></td>
    </tr>
  );
}

export default Goal;