export type GoalsItemType = {
  id: string
  goalName: string
  units: string
  goalValue: number
  currentValue: number
};

export type GoalsType = [GoalsItemType];