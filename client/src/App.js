import logo from './logo.svg';
import './App.css';

function App() {

  const getGreeting = () => {
    fetch('/greetings')
      .then(response => response.text())
      .then(data => console.log({ data }));
  }

  return (
    <div className="App">
      <button onClick={getGreeting}>get greeting</button>
    </div>
  );
}

export default App;
