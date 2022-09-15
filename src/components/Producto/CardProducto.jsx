import React from "react";
import "./cardProducto.css";

function CardProducto() {
  return (
    <div className="cardProducto">
      <div className="imagProducto">
        <img src="" className="" alt="imag producto" />
      </div>
      <div className="descripcionCard">
        <h3>Titulo producto</h3>
        <p className="">Descripción</p>
        <h4>Precio $1500</h4>
      </div>
      <a href="#vermas">Ver más</a>
    </div>
  );
}

export default CardProducto;