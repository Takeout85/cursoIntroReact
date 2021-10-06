import React from 'react';
import { useLocalStorage } from './useLocalStoraje';

const TodoContext = React.createContext();

function TodoProvider(props) {
  const  {
    item: todos, 
    saveItem: saveTodos, 
    loading, 
    error
  } = useLocalStorage('TODOS_V1', []);
  
  const [serchValue, setSearchValue] =  React.useState('');
  const [openModal, setOpenModal] = React.useState(false)

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  let searchedTodos = [];

  if (!serchValue.length >= 1) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase();
      const searchText = serchValue.toLowerCase();
      return todoText.includes(searchText);
    });
  }
  
  const addTodo = (text) => {
    const newTodos = [...todos];
    newTodos.push({
      completed: false,
      text,
    });
    saveTodos(newTodos)
  }
  
  const toggleCompleteTodos = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    saveTodos(newTodos);
  };

  const deleteTodos = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };

  return (
    <TodoContext.Provider value={{
      loading,
      error,
      totalTodos,
      completedTodos,
      serchValue,
      setSearchValue,
      searchedTodos,
      addTodo,
      toggleCompleteTodos,
      deleteTodos,
      openModal,
      setOpenModal,
    }}>
      {props.children}
    </TodoContext.Provider>
  )
}

export { TodoContext, TodoProvider}