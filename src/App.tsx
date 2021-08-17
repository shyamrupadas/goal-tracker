import React, { useCallback, useState } from 'react';
import './App.css';
import NewGoalModal from './component/Modal';
import GoalsTable from './component/GoalsTable';
import { GoalsItemType } from './types/types';

function App() {

  const [goals, setGoals] = useState(
    JSON.parse(localStorage.getItem('goals') as string) || []
  );

  const updateGoals = (newGoals: any) => {
    setGoals(newGoals);
    localStorage.setItem('goals', JSON.stringify(newGoals));
  };

  const addGoal = useCallback((goalItem: GoalsItemType) => {
    updateGoals([...goals, goalItem]);
  }, [goals]);

  const deleteGoal = useCallback((id: string) =>
    updateGoals(goals.filter((item: GoalsItemType) => item.id !== id)), [goals]);

  const changeGoal = useCallback((goalItem: GoalsItemType) => {
    updateGoals(
      goals.map((el: GoalsItemType) =>
        goalItem.id === el.id
          ? { ...el, ...goalItem }
          : el)
    );
  }, [goals]);

  const moveGoalUp = useCallback((id: string) => {
    const goalIndex = goals.findIndex((element: GoalsItemType) => element.id === id);
    if (goalIndex === 0) return;

    let newGoals = [...goals];
    [newGoals[goalIndex], newGoals[goalIndex - 1]] = [newGoals[goalIndex - 1], newGoals[goalIndex]];
    updateGoals(newGoals);
  }, [goals]);

  const moveGoalDown = useCallback((id: string) => {
    const goalIndex = goals.findIndex((element: GoalsItemType) => element.id === id);
    if (!goals[goalIndex + 1]) return;
    let newGoals = [...goals];
    [newGoals[goalIndex], newGoals[goalIndex + 1]] = [newGoals[goalIndex + 1], newGoals[goalIndex]];
    updateGoals(newGoals);
  }, [goals]);

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
