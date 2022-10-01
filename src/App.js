import React from "react";
import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import Navbar from './components/NavBar/NavBar';
import Header from './components/Header/Header';
import ItemListContainer from './components/Producto/ItemListContainer';
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route} from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <div  className="App">
        <Header/>
        <Navbar/>
        <Routes>
            <Route path="/" element={
                <ItemListContainer greeting="Elige tus productos deseados"/>
            }/>
            <Route path="/detalle/:id" element={
                <ItemDetailContainer/>
            }/>
            <Route path="/categoria/:cat" element={
                <ItemListContainer/>
            }/>
            <Route path="/cart" element={
              <h2> Pagina en desarrollo</h2>
            }/>
            <Route path="*" element={
              <h2> 404: No existe link</h2>
            }></Route>
        </Routes> {" "}
      </div>
    </BrowserRouter>
  );
} 
export default App;