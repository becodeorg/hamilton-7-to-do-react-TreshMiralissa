import "./index.css"
import AddTodo from "./components/AddTodo"
import ListTodo from "./components/ListTodo"


function App(){
  return (
    <div>
      <h1 className="2xl font-bold bg-pink-200 text-pink-700 p-5">My todo App</h1>

      <AddTodo/>
      <ListTodo/>
    </div>
  );
  }

export default App;