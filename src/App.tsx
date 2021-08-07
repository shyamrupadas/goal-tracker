import React, { useEffect, useState } from 'react';
import './App.css';
import NewGoalModal from './component/Modal';
import GoalsTable from './component/GoalsTable';
import { GoalsType } from './types/types';

function App() {

  const [goals, setGoals] = useState(
    JSON.parse(localStorage.getItem('goals') as string) || []
  );

  const addGoal = (goalItem: GoalsType) => {
    setGoals(
      [...goals, goalItem]
    )
  };

  const changeGoal = (goalItem: GoalsType) => {

    const newGoals = goals.map((el: any) =>
      goalItem.id === el.id ? {
        ...el, goalName: goalItem.goalName, units: goalItem.units,
        goalValue: goalItem.goalValue, currentValue: goalItem.currentValue
      } : el);
    setGoals([...newGoals]);
  };

  const deleteGoal = (id: string) => {
    setGoals(
      goals.filter((item: any) => item.id !== id)
    )
  };

  const moveGoalUp = (id: string) => {
    const goalIndex = goals.findIndex((element: any) => element.id === id);
    if (goalIndex === 0) return;

    let goalsCopy = [...goals];
    [goalsCopy[goalIndex], goalsCopy[goalIndex - 1]] = [goalsCopy[goalIndex - 1], goalsCopy[goalIndex]];
    setGoals(goalsCopy);
  };

  const moveGoalDown = (id: string) => {
    const goalIndex = goals.findIndex((element: any) => element.id === id);
    if (!goals[goalIndex + 1]) return;
    let goalsCopy = [...goals];
    [goalsCopy[goalIndex], goalsCopy[goalIndex + 1]] = [goalsCopy[goalIndex + 1], goalsCopy[goalIndex]];
    setGoals(goalsCopy);
  };

  useEffect(() => {
    localStorage.setItem('goals', JSON.stringify(goals))
  }, [goals]);

  return (
    <div className='App'>
      <div className='AppContainer'>
        <h1>Трекер целей на неделю</h1>
        <NewGoalModal buttonLabel={'Добавьте цель'} addGoal={addGoal}/>
        <GoalsTable goals={goals} deleteGoal={deleteGoal} moveGoalUp={moveGoalUp}
                    moveGoalDown={moveGoalDown} changeGoal={changeGoal}/>
      </div>
    </div>
  );
}

export default App;
