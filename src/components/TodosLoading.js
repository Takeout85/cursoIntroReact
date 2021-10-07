import React from 'react';
import { FaCheck } from 'react-icons/fa';
import { FaTrashAlt } from 'react-icons/fa';
import '../styles/components/TodoLoading.css';

function TodosLoading() {
  return (
    <li className="loadingTodo">
      <span className="loadingTodo-checkIcon">
        <FaCheck />
      </span>
      <div className="loadingTodo-text">
        <p>LOADING </p>
        <div className="loadingTodo__loadingIcon">
          <div className="loadingTodo__loadingIcon-1"></div>
          <div className="loadingTodo__loadingIcon-2"></div>
          <div className="loadingTodo__loadingIcon-3"></div>
        </div>
      </div>
      <span className="loadingTodo-deleteIcon">
        <FaTrashAlt />
      </span>
    </li>
  )
}

export {TodosLoading};
