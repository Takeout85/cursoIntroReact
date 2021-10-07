import React from 'react';
import { TodoContext } from './TodoContext';
import { FaPlus } from 'react-icons/fa';
import '../styles/components/CreateTodoButton.css'

function CreateTodoButton() {
  const { openModal, setOpenModal } = React.useContext(TodoContext);
  const onClickButton = () => {
    setOpenModal(!openModal);
  }
  return (
    <button className="CreateTodoButton" onClick={onClickButton}>
      <FaPlus className="CreateTodoButton-span"/>
    </button>
  )
}

export {CreateTodoButton}
