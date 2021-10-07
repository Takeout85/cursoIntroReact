import React from 'react';
import { FaCheck } from 'react-icons/fa';
import { FaTrash } from 'react-icons/fa';
import '../styles/components/TodoItem.css';

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
        <FaCheck />
      </span>
      <p className={completed ? 'TodoItem-p--complete' : ''}>{text}</p>
      <span 
        className="icon-deleted"
        onClick={onDelete}
      >
        <FaTrash />
      </span>
    </li>
  );
};

export { TodoItem };
