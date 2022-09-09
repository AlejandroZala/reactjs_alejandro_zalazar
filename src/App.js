import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import Navbar from './components/Navbar/NavBar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <img src="/imagenes/logoda.jpg" className="App-logo" alt="logo" />
        </div>
        <h1>
            <strong>Negocios Inmobiliarios</strong>
        </h1>
      </header>
      <Navbar />

    </div>
  );
}

export default App;