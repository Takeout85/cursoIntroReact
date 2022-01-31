import React from 'react';
import '../styles/components/TodoForm.css'

function TodoForm({ addTodo, setOpenModal }) {

  const [newTodoValue, setnewTodoValue] = React.useState('');

  const onChange = (event) => {
    setnewTodoValue(event.target.value)
  };

  const onCancel = () => {
    setOpenModal(false);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    
    if(newTodoValue === ''){
      console.log(
        'actualizar estado de todo lleno o no'
      ); 
    } else {
      addTodo(newTodoValue)
      setOpenModal(false);
    }

  };

  return (
    <form action="" onSubmit={onSubmit} className="">
      <label>Write your new TASK</label>
      <textarea 
        value={newTodoValue}
        onChange={onChange}
        placeholder="Buy balls for the game"
      />
      <div className="bottonContainer">
        <button
          type="button" 
          onClick={onCancel}
          className="bottonForm bottonContainer-cancel"
        >
          Cancel
        </button>
        <button 
          type="submit"
          onClick={onSubmit}
          className="bottonForm bottonContainer-add"
        >
          Add
        </button>
      </div>
    </form>
  )
}

export  { TodoForm }
