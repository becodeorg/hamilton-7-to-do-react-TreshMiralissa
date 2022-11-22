import './App.css';
import Title from './components/title';
import AddToDo from './components/addToDo';
import TodoList from './components/todoList';
import React, { useState } from "react";

function App() {
  const initialTodos = ["Translate informations", "Learn React", "Be Awesome !"];
  const [todos, setTodos] = useState(initialTodos);

  return (
    <div className="App">
      <Title/>
      <main className="px-10">
        <AddToDo todos={todos} setTodos={setTodos}/>  {/* transfert le tabl todos et sa fonction dans AddToDo */}
        <TodoList todos={todos} setTodos={setTodos}/> 
        {/* idem dans TodoList */}
      </main>
    </div>
  );
}

export default App;