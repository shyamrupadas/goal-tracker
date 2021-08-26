import React, { useContext } from 'react';
import { Button, Progress } from 'reactstrap';
import GoalItem from './GoalItem'
import { GoalsItemType } from '../types/types';
import { AppStateContext } from '../context';

type PropsType = {
  goal: GoalsItemType
};

const Goal: React.FC<PropsType> = ({ goal }) => {

  const {deleteGoal, moveGoalUp, moveGoalDown, changeGoal}: any = useContext(AppStateContext);

  // формирую объект с актуальным объектом goal, для изменения в setGoals
  const makeGoal = (itemValue: string | number, itemKey: string): any => {
    switch (itemKey) {
      case 'goalName':
        return {
          ...goal,
          goalName: itemValue
        };
      case 'units':
        return {
          ...goal,
          units: itemValue
        };
      case 'goalValue':
        return {
          ...goal,
          goalValue: itemValue
        };
      case 'currentValue':
        return {
          ...goal,
          currentValue: itemValue
        };
      default:
        return {
          ...goal
        }
    }

  };

  const changeGoalItem = (goalItem: string | number, itemKey: string) => {
    const goal = makeGoal(goalItem, itemKey)
    changeGoal(goal);
  };

  const progressValue = Math.round(goal.currentValue / goal.goalValue * 100)

  return (
    <tr>
      <GoalItem itemKey={'goalName'} goalItemProp={goal.goalName} changeGoalItem={changeGoalItem} />
      <GoalItem itemKey={'units'} goalItemProp={goal.units} changeGoalItem={changeGoalItem} />
      <GoalItem itemKey={'goalValue'} goalItemProp={goal.goalValue} changeGoalItem={changeGoalItem} />
      <GoalItem itemKey={'currentValue'} goalItemProp={goal.currentValue} changeGoalItem={changeGoalItem} />
      <td><Progress value={progressValue}/></td>
      <td><Button outline color="secondary" size="sm" onClick={() => deleteGoal(goal.id)}>x</Button></td>
      <td onClick={() => moveGoalUp(goal.id)}>&#8593;</td>
      <td onClick={() => moveGoalDown(goal.id)}>&#8595;</td>
    </tr>
  );
};

export default Goal;