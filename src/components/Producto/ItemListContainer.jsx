import React from "react";
import CardProducto  from "./CardProducto";

function ItemListContainer(props) {
  return (
    <div>
      <h2>{props.greeting}</h2>
      <div className="main container">
        <CardProducto
          precio="1500"
          nombre="Crema Nutritiva Regeneradora"
          descripcion="Con ácido hialurónico, colágeno, caléndula"
          img="https://http2.mlstatic.com/D_NQ_NP_758724-MLA48843033111_012022-O.webp"
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