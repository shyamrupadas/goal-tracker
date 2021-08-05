import React from 'react';
import { Table } from 'reactstrap';
import Goal from './Goal';
import { GoalsType } from '../types/types';

const GoalsTable = ({ goals, addGoal }: any) => {

  const goalElements = goals.map((g: GoalsType) => <Goal key={g.id}
                id={g.id}
                goalName={g.goalName}
                units={g.units}
                goalValue={g.goalValue}
                currentValue={g.currentValue}/>
  );

  return (
    <Table hover>
      <thead>
      <tr>
        <th>#</th>
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