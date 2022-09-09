import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import Navbar from './components/Navbar/NavBar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Navbar />
      </header>
    </div>
  );
}

export default App;
