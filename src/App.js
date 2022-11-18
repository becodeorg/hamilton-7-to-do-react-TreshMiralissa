import logo from './logo.svg';
import './App.css';
import Title from './components/title.js';
import InputField from './components/inputField.js';
import SubmitButton from './components/submitButton';
import TodoList from './components/todoList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Title/>
        <InputField/>
        <SubmitButton/>
        <TodoList/>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
