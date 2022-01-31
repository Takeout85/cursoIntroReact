import React from 'react';
import '../styles/components/TodoCounter.css';

function TodoCounter( {totalTodos, completedTodos} ) {
  return (
    <h2 className="TodoCounter">You have completed {completedTodos} of {totalTodos} TASKS</h2>
  );
}

export { TodoCounter };
