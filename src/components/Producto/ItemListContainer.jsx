import React from "react";
import CardProducto  from "./CardProducto";

function ItemListContainer(props) {
  return (
    <div className="main container">
      <h1>{props.greeting}</h1>
      <CardProducto/>

    </div>
  )
}

export default ItemListContainer;