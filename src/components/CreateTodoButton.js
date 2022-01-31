import React from 'react';
import { FaPlus } from 'react-icons/fa';
import '../styles/components/CreateTodoButton.css'

function CreateTodoButton({ openModal, setOpenModal }) {
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
