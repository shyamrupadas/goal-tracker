import React from 'react';
import { Table } from 'reactstrap';
import Goal from './Goal';
import { GoalsItemType } from '../types/types';

type GoalsTablePropsType = {
  goals: [GoalsItemType]
  deleteGoal: (id: string) => void
  moveGoalUp: (id: string) => void
  moveGoalDown: (id: string) => void
  changeGoal: (goalItem: GoalsItemType) => void
};

const GoalsTable: React.FC<GoalsTablePropsType> = ({ goals, deleteGoal, moveGoalUp, moveGoalDown, changeGoal }) => {

  const goalElements = goals.map((g: GoalsItemType) => <Goal
    key={g.id} goal={g} deleteGoal={deleteGoal}
    moveGoalUp={moveGoalUp} moveGoalDown={moveGoalDown} changeGoal={changeGoal} />);

  return (
    <Table hover>
      <thead>
      <tr>
        <th>Название</th>
        <th>Ед. измерения</th>
        <th>Цель на неделю</th>
        <th>Сделано</th>
        <th>Прогресс</th>
      </tr>
      </thead>
      <tbody>
      {goalElements}
      </tbody>
    </Table>

  );
}

export default GoalsTable;