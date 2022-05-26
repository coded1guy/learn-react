import React, { useState } from 'react';
import './App.css';
import { InputArea } from "./components/inputArea"
import TodoItem from "./components/todoItems"

function App() {
  const[items, setItems] = useState([]);

  function addItems(inputText) {
    setItems(function(prevItems) {
      return [...prevItems, inputText];
    });
  };

  function deleteItem(id) {
    setItems(function(prevItems) {
      return prevItems.filter((item, index)=> index !== id)
    });
  };

  return (
    <div className="container">
      <div className="heading">
        <h1>TO-DO List</h1>
      </div>
      <InputArea onAdd={addItems} />
      <div>
        <ul>
          {items.map((item, index, items)=> 
            <TodoItem key={index} id={index} text={item} onChecked={deleteItem} />
          )}
        </ul>
      </div>
    </div>
  );
}

export default App;
