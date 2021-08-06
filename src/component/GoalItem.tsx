import React, { useState } from 'react';

const GoalItem = ({ goalItemProp }: any) => {

  const [editMode, toggleEditMode] = useState(false);
  const onToggleEditMode = () => toggleEditMode(!editMode);

  const [goalName, setGoalName] = useState(goalItemProp);

  const keyPress = (e: any) => {
    const code = e.keyCode || e.which;
    if (code === 13) {
      onToggleEditMode();
    }
  };

    return (
      <td onClick={onToggleEditMode}>{
        editMode
        ? <input onChange={(e) => setGoalName(e.target.value)}
                 onKeyPress={e => keyPress(e)} onBlur={onToggleEditMode}
                 autoFocus={true} type="text" value={goalName}/>
        : goalName}</td>
    )
}

export default GoalItem;