import './App.css';
import Title from './components/title';
import AddToDo from './components/addToDo';
import TodoList from './components/todoList';
import React, { useState } from "react";

function App() {
  const [todos, setTodos] = useState();
  return (
    <div className="App">
      <Title/>
      <main className="px-10">
        <AddToDo/>
        <TodoList/>
      </main>
    </div>
  );
}

export default App;
