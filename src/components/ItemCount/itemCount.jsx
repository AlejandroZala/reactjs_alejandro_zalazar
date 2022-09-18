import React, { useState } from "react";

function ItemCount(props) {
  const [count, setCount] = React.useState(props.valorMin);

  function handleSuma() {
    if (count < props.valorMax){
        setCount(count + 1);
    }
  }

  function handleResta() {
    if (count > 1) {
        setCount(count - 1);
    }
  }

  function onAddToCart() {
    alert('Usted agrego producto al carrito')
  }

  return (
    <div className="main container">
      <div>
        <button onClick={handleResta}>-</button>
        <span>{count}</span>
        <button onClick={handleSuma}>+</button>
      </div>
      <button onClick={onAddToCart}>Agregar al carrito</button>
    </div>
  );
}

export default ItemCount;