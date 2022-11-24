import "./index.css"
import AddTodo from "./components/AddTodo"
import ListTodo from "./components/ListTodo"

import { useState, useEffect } from "react";
import { useRef } from "react";
// import { v4 as uuidv4 } from 'uuid';


function App(){
  const initialList = [
    ];

    const LSKEY = "My TodoApp";

    const firstUpdate = useRef(true);

    const [todos, setTodos] = useState(initialList);
    
    const addItem = (value) =>{
      const copyArr = [...todos];
      copyArr.push(value);
      setTodos(copyArr);
    }

    useEffect(()=> {
      let data = JSON.parse(window.localStorage.getItem(LSKEY + ".todos"));
      setTodos(data ?? []);
    }, []);

     // Save todos to localStorage
    useEffect(() => {
      if (firstUpdate.current){
        firstUpdate.current = false;
        return;
      }
      window.localStorage.setItem(LSKEY + ".todos", JSON.stringify(todos));
    }, [todos]);


  return (
    <div>
      <h1 className="2xl font-bold bg-pink-200 text-pink-700 p-5">My todo App</h1>

      <AddTodo addItem={addItem}/>
      <ListTodo todos={todos} setTodos={setTodos}/>
    </div>
  );
  }

export default App;