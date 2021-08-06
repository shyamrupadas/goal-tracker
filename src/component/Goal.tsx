import React from 'react';
import { Button } from 'reactstrap';
import GoalItem from './GoalItem'

const Goal = ({ id, goalName, units, goalValue, currentValue, deleteGoal, moveGoalUp, moveGoalDown }: any) => {

   return (
    <tr>
      <GoalItem goalItemProp={goalName} />
      <GoalItem goalItemProp={units} />
      <GoalItem goalItemProp={goalValue} />
      <GoalItem goalItemProp={currentValue} />
      <td>{Math.round(currentValue / goalValue * 100)}%</td>
      <td><Button outline color="secondary" size="sm" onClick={() => deleteGoal(id)}>x</Button></td>
      <td onClick={() => moveGoalUp(id)}>&#8593;</td>
      <td onClick={() => moveGoalDown(id)}>&#8595;</td>
    </tr>
  );
}

export default Goal;