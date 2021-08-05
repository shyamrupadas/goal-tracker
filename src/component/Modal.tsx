import React, { useState } from 'react';
import { Button, Modal, ModalBody, ModalHeader } from 'reactstrap';
import NewGoalForm from './NewGoalForm';

const NewGoalModal = ({addGoal, ...props}: any) => {
  const {
    buttonLabel,
    className
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    toggle();
    addGoal(
      e.target.elements.goalName.value,
      e.target.elements.goalUnits.value,
      e.target.elements.goalValue.value,
      e.target.elements.goalCurrent.value
    );
  }

  return (
    <div>
      <Button color="primary" onClick={toggle}>{buttonLabel}</Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Создать новую цель</ModalHeader>
        <ModalBody>
          <NewGoalForm handleSubmit={handleSubmit}/>
        </ModalBody>
      </Modal>
    </div>
  );
}

export default NewGoalModal;