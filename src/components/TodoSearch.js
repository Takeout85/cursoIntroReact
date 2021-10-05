import React from 'react';
import { TodoContext } from './TodoContext';
import '../styles/components/TodoSearch.css'

function TodoSearch() {
  const { serchValue, setSearchValue } = React.useContext(TodoContext)
  const  onSearchValueChange = (event) => {
    setSearchValue(event.target.value)
  }
  return (
    <div className="TodoSearch" >
      <input 
        className="TodoSearch-input" 
        type="text" 
        placeholder="Cebolla"
        value={serchValue}
        onChange={onSearchValueChange}
      />
    </div>
  );
}

export { TodoSearch };
