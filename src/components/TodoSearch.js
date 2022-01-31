import React from 'react';
import '../styles/components/TodoSearch.css'

function TodoSearch({ searchValue, setSearchValue }) {
  const  onSearchValueChange = (event) => {
    setSearchValue(event.target.value)
  }
  return (
    <div className="TodoSearch" >
      <input 
        className="TodoSearch-input" 
        type="text" 
        placeholder="Search Task"
        value={searchValue}
        onChange={onSearchValueChange}
      />
    </div>
  );
};

export { TodoSearch };
