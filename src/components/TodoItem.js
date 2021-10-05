import React from 'react';
import '../styles/components/TodoItem.css'

function TodoItem({ 
  completed, 
  text, 
  onDelete, 
  onComplete, 
}) {
  return (
    <li className="TodoItem">
      <span 
        className={`Icon-check ${completed ? 'Icon-check--active' : ''}`}
        onClick={onComplete}
      >
        √
      </span>
      <p className={completed ? 'TodoItem-p--complete' : ''}>{text}</p>
      <span 
        className="icon-deleted"
        onClick={onDelete}
      >
        X
      </span>
    </li>
  );
}

export { TodoItem };
