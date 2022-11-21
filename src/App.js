import './App.css';
import Title from './components/title';
import AddToDo from './components/addToDo';
import TodoList from './components/todoList';
import SecondTitle from './components/secondTitle';

function App() {
  return (
    <div className="App">
      <Title/>
      <main className="px-10">
        <AddToDo/>
        <SecondTitle/>
        <TodoList/>
      </main>
    </div>
  );
}

export default App;
