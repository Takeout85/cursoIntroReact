import React from 'react';
import { TodoContext } from './TodoContext';
import '../styles/components/TodoCounter.css';

function TodoCounter() {
  const { totalTodos, completedTodos} = React.useContext(TodoContext)
  return (
    <h2 className="TodoCounter">You have completed {completedTodos} of {totalTodos} TASK</h2>
  );
}

export { TodoCounter };
