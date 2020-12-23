import logo from './logo.svg';
import './App.css';
import SearchContext from './SearchContext.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="App-bar">
          <h6>Show Finder</h6>
        </div>
      </header>
      <div>
          <SearchContext />
        </div>
    </div>
  );
}

export default App;
