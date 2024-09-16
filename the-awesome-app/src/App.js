import logo from './logo.svg';
import './App.css';
import Message from './components/Message';
import Counter from './components/Counter';

function App() {
  return (
    <div className="App">
      <header className="App-header">
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
      <main>
          {/* <Message text="React" color="blue"/>
          <Message text="JSX" color="red"/> */}

          <Counter initialvalue={5}/>
          <Counter initialvalue={20}/>
      </main>
    </div>
  );
}

export default App;
