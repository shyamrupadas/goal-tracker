import React from 'react';
import { GoalsItemType } from './types/types';

export type AppContextType = {
  addGoal: (goalItem: GoalsItemType) => void
  deleteGoal: (id: string) => void
  moveGoalUp: (id: string) => void
  moveGoalDown: (id: string) => void
  changeGoal: (goalItem: GoalsItemType) => void
  goals: [GoalsItemType]
};

export const AppStateContext = React.createContext<AppContextType | undefined>(undefined);

