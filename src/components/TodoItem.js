import React from 'react';
import '../styles/components/TodoItem.css'

function TodoItem(props) {
  return (
    <li className="TodoItem">
      <span 
        className={`Icon-check ${props.completed ? 'Icon-check--active' : ''}`}
        onClick={props.onComplete}
      >
        √
      </span>
      <p className={props.completed ? 'TodoItem-p--complete' : ''}>{props.text}</p>
      <span 
        className="icon-deleted"
        onClick={props.onDelete}
      >
        X
      </span>
    </li>
  );
};

export { TodoItem };
