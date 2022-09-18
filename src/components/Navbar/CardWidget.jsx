import React from 'react'
import "./cardWidget.css";

function CardWidget() {
  return (
    <div className="contenedorWidget">
        <div>
            <img src="/imagenes/carrito.png" className="widget" alt="logoCarrito" />
        </div>
        <span>0</span>
    </div>
  )
}

export default CardWidget