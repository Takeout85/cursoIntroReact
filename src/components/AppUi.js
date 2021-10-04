import React from 'react';
import { TodoContext } from './TodoContext';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoItem } from './TodoItem';
import { TodoList } from './TodoList';
import { CreateTodoButton } from './CreateTodoButton';

function AppUi() {
  return (
    <>
      <TodoCounter />
      <TodoSearch />
      
      <TodoContext.Consumer>
        {({error, loading, searchedTodos, toggleCompleteTodos, deleteTodos}) => (
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
        )}
      </TodoContext.Consumer>

      <CreateTodoButton />

  </>
  )
}

export { AppUi };
