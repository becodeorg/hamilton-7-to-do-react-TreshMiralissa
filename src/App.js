import logo from './logo.svg';
import './App.css';
import Title from './components/title.js';
import InputField from './components/inputField.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Title/>
        <InputField/>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React @ BeCode
        </a>
      </header>
    </div>
  );
}

export default App;
