import React, { useEffect, useState } from 'react';
import './App.css';
import NewGoalModal from './component/Modal';
import GoalsTable from './component/GoalsTable';
import { GoalsType } from './types/types';

function App() {

  const [goals, setGoals] = useState(
    JSON.parse(localStorage.getItem('goals') as string) || []
  );

  useEffect(() => {
    localStorage.setItem('goals', JSON.stringify(goals))
  }, [goals])

  const addGoal = (goalItem: GoalsType) => {
    setGoals(
      [...goals, goalItem]
    )
  };

  const deleteGoal = (id: number) => {
    setGoals(
      goals.filter((item: any) => item.id !== id)
    )
  };

  const moveGoalUp = (id: any) => {
    const goalIndex = goals.findIndex((element: any) => element.id === id);
    if (goalIndex === 0) {
      alert('Да куда уж выше-то!');
      return;
    }

    let goalsCopy = [...goals];
    [goalsCopy[goalIndex], goalsCopy[goalIndex - 1]] = [goalsCopy[goalIndex - 1], goalsCopy[goalIndex]];
    setGoals(goalsCopy);
  };

  const moveGoalDown = (id: any) => {
    const goalIndex = goals.findIndex((element: any) => element.id === id);
    if (goalIndex === 0) {
      alert('Ниже только адские планеты :)');
      return;
    }

    let goalsCopy = [...goals];
    [goalsCopy[goalIndex], goalsCopy[goalIndex + 1]] = [goalsCopy[goalIndex + 1], goalsCopy[goalIndex]];
    setGoals(goalsCopy);
  };


  return (
    <div className='App'>
      <div className='AppContainer'>
        <h1>Трекер целей на неделю</h1>
        <NewGoalModal buttonLabel={'Добавьте цель'} addGoal={addGoal}/>
        <GoalsTable goals={goals} deleteGoal={deleteGoal} moveGoalUp={moveGoalUp} moveGoalDown={moveGoalDown}/>
      </div>
    </div>
  );
}

export default App;
