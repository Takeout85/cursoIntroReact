import React from 'react';
import { FaPlus } from 'react-icons/fa';
import '../styles/components/EmptyTodos.css';

function EmptyTodos() {
  return (
    <li className="EmptyTodosContainer">
      <p className="EmptyTodosContainer__text">Create your first TASK</p>
      <div className="EmptyTodosContainer__buttonIcon">
        <FaPlus size="55px" className="EmptyTodosContainer-plusIcon"/>
      </div>
    </li>
  )
}

export {EmptyTodos};
