// import React from "react";
import React, { useState } from "react";


export default function TodoList() {
  let idUnique = 0;
  const initialTodos = ["Translate informations", "Learn React", "Be Awesome !"];
  const [todos, setTodos] = useState(initialTodos);
  const [checked, setChecked] = React.useState(false);

  const handleChangeset = event => {
    if (event.target.checked) {
      console.log('✅ Checkbox is checked');
    } else {
      console.log('⛔️ Checkbox is NOT checked');
    }
    setChecked(current => !current);
  };

  return (
    <ul>
      {todos.map((todo) => (
        <li key={idUnique++}>
          <input type="checkbox"
          defaultChecked={checked}
          onChange={handleChangeset}          
          />{todo}
        </li>
      
      ))}
    </ul>
  );
}

