import React from 'react';
import { TodoContext } from './TodoContext';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoItem } from './TodoItem';
import { TodoList } from './TodoList';
import { CreateTodoButton } from './CreateTodoButton';
import { Modal } from './Modal';
import { TodoForm } from './TodoForm';

function AppUi() {
  const {
    error, 
    loading, 
    searchedTodos, 
    toggleCompleteTodos, 
    deleteTodos,
    openModal,
    setOpenModal,
  } = React.useContext(TodoContext)
  return (
    <>
      <TodoCounter />
      <TodoSearch />

      <TodoList>
        {error && <p>Desesperate, hubo un error</p>}
        {loading && <p>Estamos cargando, espera</p>}
        {(!loading && !searchedTodos.length) && <p>Crea tu primer todo</p>}

        {searchedTodos.map(todo => (
          <TodoItem 
            key={todo.text} 
            text={todo.text} 
            completed={todo.completed}
            onComplete={() => toggleCompleteTodos(todo.text)}
            onDelete={() => deleteTodos(todo.text)}
          />
        ))}
      </TodoList>

      {!!openModal && (
        <Modal>
          <TodoForm />
        </Modal>
      )}

      <CreateTodoButton setOpenModal={setOpenModal} modal={openModal}/>

  </>
  )
}

export { AppUi };
