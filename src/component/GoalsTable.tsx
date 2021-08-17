import React from 'react';
import { Table } from 'reactstrap';
import Goal from './Goal';

const GoalsTable = ({ goals, deleteGoal, moveGoalUp, moveGoalDown, changeGoal }: any) => {

  const goalElements = goals.map((g: any) => <Goal
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