import React from 'react'
import { FaRedoAlt } from 'react-icons/fa';


function TodosError() {
  return (
    <li className="TodoError">
      <p className="TodoError-text">OOPS! something went wrong</p>
      <div className="TodoError">
        <FaRedoAlt />
      </div>
    </li>
  )
}

export {TodosError};
