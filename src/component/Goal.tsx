import React from 'react';
import { GoalsType } from '../types/types';

const Goal: React.FC<GoalsType> = (props) => {

  return (
    <tr>
      <td>{props.id}</td>
      <td>{props.goalName}</td>
      <td>{props.units}</td>
      <td>{props.goalValue}</td>
      <td>{props.currentValue}</td>
      <td>-</td>
    </tr>
  );
}

export default Goal;