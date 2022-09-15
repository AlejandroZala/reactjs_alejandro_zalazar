import React from "react";
import "./header.css";

function Header() {
  return (
    <header className="App-header">
        <div>
            <img src="/imagenes/logoda.jpg" className="App-logo" alt="logo" />
        </div>
        <h1>Productos Artesanales</h1>
    </header>
  );
}

export default Header;