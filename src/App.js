import React from "react";
import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import Navbar from './components/NavBar/NavBar';
import Header from './components/Header/Header';
import ItemListContainer from './components/Producto/ItemListContainer';


function App() {
  return (
    <div className="App">
      <Header/>
      <Navbar/>
      <ItemListContainer greeting="Los más ricos productos"/>

    </div>
  );
} 
export default App;