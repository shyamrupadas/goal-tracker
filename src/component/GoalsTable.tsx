import React, { useContext } from 'react';
import { Table } from 'reactstrap';
import { Goal } from './Goal';
import { AppStateContext } from '../context';

export const GoalsTable: React.FC = () => {

  const { goals } = useContext(AppStateContext);

  const goalElements = goals.map((g) => <Goal
    key={g.id} goal={g} />);

  return (
    <Table hover>
      <thead>
      <tr>
        <th>Название</th>
        <th>Ед. измерения</th>
        <th>Цель на неделю</th>
        <th>Сделано</th>
        <th>Прогресс</th>
        <th colSpan={3}/>
      </tr>
      </thead>
      <tbody>
      {goalElements}
      </tbody>
    </Table>

  );
};