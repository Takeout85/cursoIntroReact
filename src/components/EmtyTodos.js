import React from 'react';
import { FaPlus } from 'react-icons/fa';

import '../styles/components/EmtyTodos.css';

function EmtyTodos() {
  return (
    <li className="EmtyTodosContainer">
      <p className="EmtyTodosContainer__text">Create your first TASK</p>
      <div className="EmtyTodosContainer__buttonIcon">
      <FaPlus />
      </div>
    </li>
  )
}

export {EmtyTodos};
