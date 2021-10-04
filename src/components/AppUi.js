import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoItem } from './TodoItem';
import { TodoList } from './TodoList';
import { CreateTodoButton } from './CreateTodoButton';

function AppUi({
  totalTodos,
  completedTodos,
  serchValue,
  setSearchValue,
  searchedTodos,
  toggleCompleteTodos,
  deleteTodos,
}) {
  return (
    <>
      <TodoCounter 
        totalTodos={totalTodos}
        completedTodos={completedTodos}
      />

      
      <TodoSearch 
        serchValue={serchValue}
        setSearchValue={setSearchValue}
      />
      <TodoList>
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

      <CreateTodoButton />

  </>
  )
}

export { AppUi };
