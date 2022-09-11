import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import Navbar from './components/NavBar/NavBar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
            <img src="/imagenes/logoda.jpg" className="App-logo" alt="logo" />
        </div>
        <h1>Productos Artesanales</h1>
      </header>
      <Navbar />

    </div>
  );
}

export default App;