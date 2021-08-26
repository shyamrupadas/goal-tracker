import React, { useContext, useState } from 'react';
import { Button, Modal, ModalBody, ModalHeader } from 'reactstrap';
import { NewGoalForm } from './NewGoalForm';
import { v4 as uuidv4 } from 'uuid';
import { GoalsItemType } from '../types/types';
import { AppStateContext } from '../context';

type PropsType = {
  buttonLabel: string
  className?: string
};

export const NewGoalModal: React.FC<PropsType> = (props) => {
  const { buttonLabel, className } = props;

  const { addGoal } = useContext(AppStateContext);

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const handleSubmit = (e: any) => {
    const goal: GoalsItemType = {
      id: uuidv4(),
      goalName: e.target.elements.goalName.value,
      units: e.target.elements.goalUnits.value,
      goalValue: e.target.elements.goalValue.value,
      currentValue: e.target.elements.goalCurrent.value
    }
    e.preventDefault();
    toggle();
    addGoal(goal);
  }

  return (
    <div>
      <Button color="primary" onClick={toggle}>{buttonLabel}</Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Создать новую цель</ModalHeader>
        <ModalBody>
          <NewGoalForm handleSubmit={handleSubmit} />
        </ModalBody>
      </Modal>
    </div>
  );
};