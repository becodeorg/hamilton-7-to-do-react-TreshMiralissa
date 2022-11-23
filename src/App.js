import "./index.css"
import AddTodo from "./components/AddTodo"
import ListTodo from "./components/ListTodo"

import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';


function App(){
  const initialList = [
    {name: "Learn React", done:false, id: uuidv4()},
    {name: "Learn Tailwind", done:false, id: uuidv4()},
    {name: "Finish project", done:false, id: uuidv4()},
    ];

    const [todos, setTodos] = useState(initialList);
    
    const addItem = (value) =>{
      const copyArr = [...todos];
      todos.push(value);
      setTodos(copyArr);
    }

  return (
    <div>
      <h1 className="2xl font-bold bg-pink-200 text-pink-700 p-5">My todo App</h1>

      <AddTodo addItem={addItem}/>
      <ListTodo todos={todos} setTodos={setTodos}/>
    </div>
  );
  }

export default App;