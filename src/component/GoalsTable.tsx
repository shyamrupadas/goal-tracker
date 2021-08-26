import React, { useContext } from 'react';
import { Table } from 'reactstrap';
import Goal from './Goal';
import { GoalsItemType } from '../types/types';
import { AppStateContext } from '../context';

const GoalsTable: React.FC = () => {

  const { goals }: any = useContext(AppStateContext);

  const goalElements = goals.map((g: GoalsItemType) => <Goal
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
}

export default GoalsTable;