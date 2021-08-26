import React, { useCallback, useState } from 'react';
import { GoalsItemType } from './types/types';

export type AppContextType = {
  addGoal: (goalItem: GoalsItemType) => void
  deleteGoal: (id: string) => void
  moveGoalUp: (id: string) => void
  moveGoalDown: (id: string) => void
  changeGoal: (goalItem: GoalsItemType) => void
  goals: [GoalsItemType] | []
};

export const AppStateContext = React.createContext<AppContextType>({
  addGoal: (goalItem: GoalsItemType) => {
  },
  deleteGoal: (id: string) => {
  },
  moveGoalUp: (id: string) => {
  },
  moveGoalDown: (id: string) => {
  },
  changeGoal: (goalItem: GoalsItemType) => {
  },
  goals: []
});


  export const AppContextProvider = ({ children }: any) => {
  const [goals, setGoals] = useState(JSON.parse(localStorage.getItem('goals') as string) || []);

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

  const context: AppContextType | undefined = {
    addGoal,
    deleteGoal,
    moveGoalUp,
    moveGoalDown,
    changeGoal,
    goals
  };

  return (
    <AppStateContext.Provider value={context}>
      {children}
    </AppStateContext.Provider>
  )
};