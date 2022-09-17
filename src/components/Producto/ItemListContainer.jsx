import React from "react";
import CardProducto  from "./CardProducto";

function ItemListContainer(props) {
  return (
    <div>
      <h1>{props.greeting}</h1>
      <div className="main container">
        <CardProducto
          precio="500"
          nombre="Licor Dulce de Leche"
          descripcion="Exquisito licor cremoso de dulce de leche"
          img="https://http2.mlstatic.com/D_NQ_NP_815461-MLA50972841058_082022-O.webp"
          />
        <CardProducto/>
        <CardProducto/>
        <CardProducto/>
        <CardProducto/>
        <CardProducto/>

      </div>
    </div>

  )
}

export default ItemListContainer;