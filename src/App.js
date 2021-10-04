import React from 'react';
import { AppUi  } from './components/AppUi';

// const defaultTodos = [
//   {text: 'cortar cebolla', completed: true},
//   {text: 'tomar curso intro react', completed: false},
//   {text: 'llorar con  llorona', completed: false},
//   {text: 'cortar cebola', completed: true},
//   {text: 'cortar cebolla cortar cebolla cortar cebolla vcortar cebolla cortar cebolla cortar cebolla cortar cebolla cortar cebolla cortar cebolla cortar cebolla cortar cebolla cortar cebolla cortar cebolla cortar cebolla cortar cebolla ', completed: false},
//   {text: 'tomar cursointro react', completed: false},
//   {text: 'llorar con l llorona', completed: false},
//   {text: 'cortar ceba', completed: false},
// ];

function useLocalStorage(itemName, initialValue) {
  
  const localStorageItem = localStorage.getItem(itemName);
  let parsedItem; 

  if(!localStorageItem) {
    localStorage.setItem(itemName, JSON.stringify(initialValue));
    parsedItem = initialValue;
  } else {
    parsedItem = JSON.parse(localStorageItem)
  }
  
  const [item, setItem] = React.useState(parsedItem);

  const saveItem = (newItem) => {
    const stringifiedItem = JSON.stringify(newItem);
    localStorage.setItem(itemName, stringifiedItem);
    setItem(newItem)
  };

  return [
    item,
    saveItem
  ];
}

function App() {
  const  [todos, saveTodos] = useLocalStorage('TODOS_V1', []);
  
  const [serchValue, setSearchValue] =  React.useState('');

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  let searchedTodos = [];

  if (!serchValue.length >= 1) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase();
      const searchText = serchValue.toLowerCase();
      return todoText.includes(searchText);
    });
  };

  
  
  const toggleCompleteTodos = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    saveTodos(newTodos);
    // todos[todoIndex] = {
    //   text: todos[todoIndex].text, 
    //   completed: true, 
    // };
  };
  const deleteTodos = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };
  console.log('render antes del use effect');
  React.useEffect(() => {
    console.log('use effect');
  },[]);
  console.log('render despues del use effect');
  return (
    <AppUi 
      totalTodos={totalTodos}
      completedTodos={completedTodos}
      serchValue={serchValue}
      setSearchValue={setSearchValue}
      searchedTodos={searchedTodos}
      toggleCompleteTodos={toggleCompleteTodos}
      deleteTodos={deleteTodos}
    />
  );
}

export default App;
