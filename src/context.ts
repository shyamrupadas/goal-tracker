import React from 'react';
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
  addGoal: (goalItem: GoalsItemType) => {},
  deleteGoal: (id: string) => {},
  moveGoalUp: (id: string) => {},
  moveGoalDown: (id: string) => {},
  changeGoal: (goalItem: GoalsItemType) => {},
  goals: []
});
