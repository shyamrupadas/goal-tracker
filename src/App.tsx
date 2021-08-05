import React, { useState } from 'react';
import './App.css';
import NewGoalModal from './component/Modal';
import GoalsTable from './component/GoalsTable';

function App() {

  const [goals, setGoals] = useState(
    [
      {
        id: 1,
        goalName: 'Подтягивания',
        units: 'раз',
        goalValue: 30,
        currentValue: 5
      },
      {
        id: 2,
        goalName: 'Отжимания',
        units: 'раз',
        goalValue: 70,
        currentValue: 20
      }
    ]);

  const addGoal = (id: number, name: string, units: string, value: number, currentValue: number) => {
    setGoals(
      [...goals, { id: id, goalName: name, units: units, goalValue: value, currentValue: currentValue }]
    )
  }

  return (
    <div className="App">
      <h1>Трекер целей на неделю</h1>
      <div className="AppContainer">
      <NewGoalModal buttonLabel={'Создать цель'} addGoal={addGoal}/>
      <GoalsTable goals={goals} />
      </div>
    </div>
  );
}

export default App;
