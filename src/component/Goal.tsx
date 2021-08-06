import React from 'react';
import { Button } from 'reactstrap';
import GoalItem from './GoalItem'

const Goal = ({
                id, goalName, units, goalValue, currentValue,
                deleteGoal, moveGoalUp, moveGoalDown, changeGoal
              }: any) => {

  const changeGoalItem = (item: any) => {
    const goal = {
      id: id,
      goalName: goalName,
      units: units,
      goalValue: goalValue,
      currentValue: currentValue
    };
    changeGoal(goal);
  };

  return (
    <tr>
      <GoalItem goalItemProp={goalName} changeGoalItem={changeGoalItem}/>
      <GoalItem goalItemProp={units} changeGoalItem={changeGoalItem}/>
      <GoalItem goalItemProp={goalValue} changeGoalItem={changeGoalItem}/>
      <GoalItem goalItemProp={currentValue} changeGoalItem={changeGoalItem}/>
      <td>{Math.round(currentValue / goalValue * 100)}%</td>
      <td><Button outline color="secondary" size="sm" onClick={() => deleteGoal(id)}>x</Button></td>
      <td onClick={() => moveGoalUp(id)}>&#8593;</td>
      <td onClick={() => moveGoalDown(id)}>&#8595;</td>
    </tr>
  );
}

export default Goal;