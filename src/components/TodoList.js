/* eslint-disable react/prop-types */
import React from 'react';
import '../styles/components/TodoList.css'

function TodoList(props) {
  return (
    <section className="TodoList">
      <ul>
        {props.children}
      </ul>
    </section>
  )
}

export { TodoList }
