import React, { useState } from 'react';

const GoalItem = ({ goalItemProp, changeGoalItem }: any) => {

  const [goalItem, setGoalItem] = useState(goalItemProp);

  let [editMode, changeEditMode] = useState(false);
  const activateEditMode = () => changeEditMode(editMode = true);
  const deactivateEditMode = () => {
    changeEditMode(editMode = false);
    changeGoalItem(goalItem);
  };

  const keyPress = (e: any) => {
    const code = e.keyCode || e.which;
    if (code === 13) {
      deactivateEditMode();
    }
  };

  return (
    <td onDoubleClick={activateEditMode}>{
      editMode
        ? <input onChange={(e) => setGoalItem(e.target.value)}
                 onKeyPress={e => keyPress(e)} onBlur={deactivateEditMode}
                 autoFocus={true} type="text" value={goalItem}/>
        : goalItem}</td>
  )
}

export default GoalItem;