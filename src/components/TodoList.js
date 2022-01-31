import React from 'react';
import '../styles/components/TodoList.css'

function TodoList(props) {
  const renderFunc = props.children|| props.render;
  return (
    <section className="TodoList">
        
        

      
      <ul>
        {props.error && props.onError()}
        {(!props.loading && !props.totalTodos && !props.error) && props.onEmptyTodos()}
        {(!!props.totalTodos && !props.searchedTodos.length) && props.onEmptySearchResult()}
        {props.loading && props.onLoading()}
        {props.searchedTodos.map(renderFunc)}
      </ul>
    </section>
  )
}

export { TodoList }
