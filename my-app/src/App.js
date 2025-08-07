import logo from './logo.svg';
import './App.css';
import Welcome from './welcome.jsx';
import Student from './Student.js';
import Counter from './Counter.js';

function App() {
  return (
    <div className="App">
      <Counter />
      {/* <Student name="Harini" classText="React" grade="A" counter="0"/> */}
      <header className="App-header">
        <Welcome />
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
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
