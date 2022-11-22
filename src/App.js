import './App.css';
import Title from './components/title';
import AddToDo from './components/addToDo';
import TodoList from './components/todoList';
import React, { useState, useEffect } from "react";

const LSKEY = "MyTodoApp";

function App() {
  const initialTodos = ["Translate informations", "Learn React", "Be Awesome !"];
  const [todos, setTodos] = useState(initialTodos);

    // Save todos to localStorage
    useEffect(() => {
      window.localStorage.setItem(LSKEY + ".todos", JSON.stringify(todos));
    }, [todos]);

  return (
    <div className="bg-pink-100 flex flex-col items-center justify-start min-h-screen">
      <Title/>
      <main className="flex flex-col items-center w-full px-10">
        <AddToDo todos={todos} setTodos={setTodos}/>  {/* transfert le tabl todos et sa fonction dans AddToDo */}
        <TodoList todos={todos} setTodos={setTodos}/> 
        {/* idem dans TodoList */}
      </main>
    </div>
  );
}

export default App;