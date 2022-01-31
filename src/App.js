import React from 'react';
import { useTodos } from './components/useTodos';
import { TodoCounter } from './components/TodoCounter';
import { TodoSearch } from './components/TodoSearch';
import { TodoItem } from './components/TodoItem';
import { TodoList } from './components/TodoList';
import { CreateTodoButton } from './components/CreateTodoButton';
import { Modal } from './components/Modal';
import { TodoForm } from './components/TodoForm';
import { TodosError } from './components/TodosError';
import { TodosLoading } from './components/TodosLoading';
import { EmtyTodos } from './components/EmtyTodos';
import { TodoHeader } from './components/TodoHeader';

function App() {
  const {
    error, 
    loading, 
    searchedTodos, 
    toggleCompleteTodos, 
    deleteTodos,
    openModal,
    setOpenModal,
    totalTodos, 
    completedTodos,
    searchValue, 
    setSearchValue,
    addTodo, 
  } = useTodos();
  
  return (
    <>
      <TodoHeader>
      <TodoCounter 
        totalTodos={totalTodos}
        completedTodos={completedTodos}
      />
      <TodoSearch 
        searchValue={searchValue} 
        setSearchValue={setSearchValue}
      />
      </TodoHeader>
      
      <TodoList>
        {error && <TodosError error={error}/>}
        {(loading && !error) && new Array(4).fill().map((item, index)=>( <TodosLoading  key={index} />))}
        {(!loading && !searchedTodos.length && !error) && <EmtyTodos />}

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
          <TodoForm 
            addTodo={addTodo}
            setOpenModal={setOpenModal}
          />
        </Modal>
      )};

      <CreateTodoButton 
        setOpenModal={setOpenModal} 
        openModal={openModal}
      />
    </>
  );
};

export default App;
