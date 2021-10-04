import React from 'react';
import '../styles/components/TodoSearch.css'

function TodoSearch({ serchValue, setSearchValue }) {
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
};

export { TodoSearch };
