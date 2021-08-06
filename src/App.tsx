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
    setGoals (
      goals.filter((item: any) => item.id !== id)
    )
  };


  return (
    <div className='App'>
      <div className='AppContainer'>
        <h1>Трекер целей на неделю</h1>
      <NewGoalModal buttonLabel={'Добавьте цель'} addGoal={addGoal}/>
      <GoalsTable goals={goals} deleteGoal={deleteGoal}/>
      </div>
    </div>
  );
}

export default App;
