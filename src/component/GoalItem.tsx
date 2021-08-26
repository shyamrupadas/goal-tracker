import React, { KeyboardEvent, useState } from 'react';
import { Input } from 'reactstrap';

type PropsType = {
  itemKey: string,
  goalItemProp: string | number,
  changeGoalItem: (goalItem: string | number, itemKey: string) => void
}

const GoalItem: React.FC<PropsType> = ({ itemKey, goalItemProp, changeGoalItem }) => {

  const [goalItemValue, setGoalItemValue] = useState(goalItemProp);

  //todo fix bug about editing 2 and more goal items
  let [editMode, changeEditMode] = useState(false);
  const activateEditMode = () => changeEditMode(editMode = true);
  const deactivateEditMode = () => {
    changeEditMode(editMode = false);
    changeGoalItem(goalItemValue, itemKey);
  };

  const keyPress = (e: KeyboardEvent) => {
    const code = e.key;
    if (code === 'Enter') {
      deactivateEditMode();
    }
  };

  return (
    <td onDoubleClick={activateEditMode}>{
      editMode
        ? <Input onChange={(e) => setGoalItemValue(e.target.value)}
                 onKeyPress={e => keyPress(e)} onBlur={deactivateEditMode}
                 type="text" value={goalItemValue}/>
        : goalItemValue}</td>
  )
}

export default GoalItem;