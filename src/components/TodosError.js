import React from 'react'
import { FaRedoAlt } from 'react-icons/fa';
import '../styles/components/TodoError.css'


function TodosError() {
  return (
    <li className="TodoError">
      <p className="TodoError-text">OOPS! something went wrong</p>
      <FaRedoAlt className="TodoError-plusIcon"/>
    </li>
  )
}

export {TodosError};
