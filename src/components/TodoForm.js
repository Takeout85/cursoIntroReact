import React from 'react';
import { TodoContext } from './TodoContext';
import '../styles/components/TodoForm.css'

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
    <form action="" onSubmit={onSubmit} className="">
      <label>Escribe tu nueva tarea </label>
      <textarea 
        value={newTodoValue}
        onChange={onChange}
        placeholder="Cortar cebolla para el almuerzo"
      />
      <div className="bottonContainer">
        <button
          type="button" 
          onClick={onCancel}
          className="bottonForm bottonContainer-cancel"
        >
          cancelar
        </button>
        <button 
          type="submit"
          onClick={onSubmit}
          className="bottonForm bottonContainer-add"
        >
          anniadir
        </button>
      </div>
    </form>
  )
}

export  { TodoForm }
