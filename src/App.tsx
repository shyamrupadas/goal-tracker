import React, { useState } from 'react';
import './App.css';
import NewGoalModal from './component/Modal';
import GoalsTable from './component/GoalsTable';
import { GoalsType } from './types/types';

function App() {

  const [goals, setGoals] = useState(
    JSON.parse(localStorage.getItem('goals') as string) || []
  );

  const updateGoals = (newGoals: any) => {
    setGoals(newGoals);
    localStorage.setItem('goals', JSON.stringify(newGoals));
  };

  const addGoal = (goalItem: GoalsType) => {
    const newGoals = [...goals, goalItem]
    updateGoals(newGoals);
  };

  const deleteGoal = (id: string) => {
    const newGoals = goals.filter((item: any) => item.id !== id)
    updateGoals(newGoals);
  };

  const changeGoal = (goalItem: GoalsType) => {
    const newGoals = goals.map((el: any) =>
      goalItem.id === el.id ? {
        ...el, goalName: goalItem.goalName, units: goalItem.units,
        goalValue: goalItem.goalValue, currentValue: goalItem.currentValue
      } : el);
    updateGoals(newGoals);
  };

  const moveGoalUp = (id: string) => {
    const goalIndex = goals.findIndex((element: any) => element.id === id);
    if (goalIndex === 0) return;

    let newGoals = [...goals];
    [newGoals[goalIndex], newGoals[goalIndex - 1]] = [newGoals[goalIndex - 1], newGoals[goalIndex]];
    updateGoals(newGoals);
  };

  const moveGoalDown = (id: string) => {
    const goalIndex = goals.findIndex((element: any) => element.id === id);
    if (!goals[goalIndex + 1]) return;
    let newGoals = [...goals];
    [newGoals[goalIndex], newGoals[goalIndex + 1]] = [newGoals[goalIndex + 1], newGoals[goalIndex]];
    updateGoals(newGoals);
  };

  return (
    <div className='App'>
      <div className='AppContainer'>
        <h1>Трекер целей на неделю</h1>
        <NewGoalModal buttonLabel={'Добавьте цель'} addGoal={addGoal} />
        <GoalsTable goals={goals} deleteGoal={deleteGoal} moveGoalUp={moveGoalUp}
                    moveGoalDown={moveGoalDown} changeGoal={changeGoal} />
      </div>
    </div>
  );
}

export default App;
