import React from 'react';
import { Button } from 'reactstrap';
import GoalItem from './GoalItem'
import { GoalsType } from '../types/types';

type PropsType = {
  goalName: string
  deleteGoal: (id: string) => void
  moveGoalUp: (id: string) => void
  moveGoalDown: (id: string) => void
  changeGoal: (goalItem: GoalsType) => void
}

const Goal: React.FC<PropsType & GoalsType> = ({
                id, goalName, units, goalValue, currentValue,
                deleteGoal, moveGoalUp, moveGoalDown, changeGoal
              }) => {

  //Пишу мини-редьюсер, не знаю как по-другому сформировать объект с актуальными данными
  const makeGoalReducer: any = (itemValue: any, itemKey: any) => {
    switch (itemKey) {
      case 'goalName':
        return {
          id: id,
          goalName: itemValue,
          units: units,
          goalValue: goalValue,
          currentValue: currentValue
        };
      case 'units':
        return {
          id: id,
          goalName: goalName,
          units: itemValue,
          goalValue: goalValue,
          currentValue: currentValue
        };
      case 'goalValue':
        return {
          id: id,
          goalName: goalName,
          units: units,
          goalValue: itemValue,
          currentValue: currentValue
        };
      case 'currentValue':
        return {
          id: id,
          goalName: goalName,
          units: units,
          goalValue: goalValue,
          currentValue: itemValue
        };
      default:
        return {
          id: id,
          goalName: goalName,
          units: units,
          goalValue: goalValue,
          currentValue: currentValue
        }
    }

  };

  const changeGoalItem = (itemValue: GoalsType, itemKey: string) => {
    const goal = makeGoalReducer(itemValue, itemKey)
    changeGoal(goal);
  };

  const progressValue = Math.round(currentValue / goalValue * 100)

  return (
    <tr>
      <GoalItem itemKey={'goalName'} goalItemProp={goalName} changeGoalItem={changeGoalItem}/>
      <GoalItem itemKey={'units'} goalItemProp={units} changeGoalItem={changeGoalItem}/>
      <GoalItem itemKey={'goalValue'} goalItemProp={goalValue} changeGoalItem={changeGoalItem}/>
      <GoalItem itemKey={'currentValue'} goalItemProp={currentValue} changeGoalItem={changeGoalItem}/>
      <td>{progressValue ? progressValue + '%' : '-'}</td>
      <td><Button outline color="secondary" size="sm" onClick={() => deleteGoal(id)}>x</Button></td>
      <td onClick={() => moveGoalUp(id)}>&#8593;</td>
      <td onClick={() => moveGoalDown(id)}>&#8595;</td>
    </tr>
  );
};

export default Goal;