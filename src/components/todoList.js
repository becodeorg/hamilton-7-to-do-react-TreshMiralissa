
import React from "react";
import Checkbox from 'react-checkbox-component';


export default function TodoList(props) {
  let idUnique = 0;
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
    <section>
      <h2  className="text-2xl font-bold">Todos</h2>
      <ul>
        {props.todos.map((todo) => (
          <li key={idUnique++}>
            <input className="w-4 h-4 rounded"type="checkbox"
            defaultChecked={checked}
            onChange={handleChangeset}          
            />{todo}
          </li>
        ))}
      </ul>
    </section>
  );
}

