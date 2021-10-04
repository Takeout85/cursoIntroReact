import React from 'react';
import { TodoContext } from './TodoContext';
import '../styles/components/CreateTodoButton.css'

function CreateTodoButton() {
  const { openModal, setOpenModal } = React.useContext(TodoContext);
  const onClickButton = () => {
    setOpenModal(!openModal);
  }
  return (
    <button className="CreateTodoButton" onClick={onClickButton}>
      <span className="CreateTodoButton-span">+</span>
    </button>
  )
}

export {CreateTodoButton}
