import React from 'react';
import '../styles/components/CreateTodoButton.css'

function CreateTodoButton() {
  const onClickButton = (msg) => {
    alert(msg);
  }
  return (
    <button className="CreateTodoButton" onClick={onClickButton}>
      <span className="CreateTodoButton-span">+</span>
    </button>
  )
}

export {CreateTodoButton}
