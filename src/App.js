import logo from './assets/images/icon-monkey.svg';
import './App.css';
import AnimalAppContainer from "./containers/AnimalAppContainer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="Animal Education" />
        <p>Animal Education App</p>
      </header>

      <AnimalAppContainer/>
    </div>
  );
}

export default App;
