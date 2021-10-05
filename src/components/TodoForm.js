import React from 'react';
import { TodoContext } from './TodoContext';

function TodoForm() {

  const [newTodoValue, setnewTodoValue] = React.useState('');

  const {
    addTodo,
    setOpenModal,
  } = React.useContext(TodoContext);

  const onChange = (event) => {
    setnewTodoValue(event.target.value)
  };

  const onCancel = () => {
    setOpenModal(false);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    addTodo(newTodoValue)
    setOpenModal(false);
  };

  return (
    <form action="" onSubmit={onSubmit}>
      <label>...</label>
      <textarea 
        value={newTodoValue}
        onChange={onChange}
        placeholder="Cortar cebolla para el almuerzo"
      />
      <div>
        <button
          type="button" 
          onClick={onCancel}
        >
          cancelar
        </button>
        <button 
          type="submit"
          onClick={onSubmit}
        >
          anniadir
        </button>
      </div>
    </form>
  )
}

export  { TodoForm }
