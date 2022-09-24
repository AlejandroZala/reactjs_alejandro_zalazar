import React from "react";
import "../ItemCount/itemCount.css";

function ItemCount(props) {
  const [count, setCount] = React.useState(props.valorMin);

  function handleSuma() {
    if (count < props.valorMax){
        setCount(count + 1);
    }
  }

  function handleResta() {
    if (count > props.valorMin) {
        setCount(count - 1);
    }
  }

  function onAddToCart() {
    alert('Usted agrego producto al carrito')
  }

  return (
    <div className="main container">
      <div>
        <button className="btnMasMenos" onClick={handleResta}>-</button>
        <span>{count}</span>
        <button className="btnMasMenos" onClick={handleSuma}>+</button>
      </div>
      <button className="btnAgregarCarro" onClick={onAddToCart}>Agregar al carrito</button>
    </div>
  );
}

export default ItemCount;