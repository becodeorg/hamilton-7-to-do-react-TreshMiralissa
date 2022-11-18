// import React, { useState } from "react";

export default function TodoList(){
    const initialTodos = ["Translate informations", "Learn React", "Be Awesome !"];;
    
    const listItems = initialTodos.map((todo)=>
    <li key={todo.id()}>{todo}</li>);
    return(
        <ul>{listItems}</ul>
    );
}
