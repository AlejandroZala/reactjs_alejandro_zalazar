import React from "react";
import Button from "../Button/Button";
import ItemCount from "../ItemCount/itemCount";
import "./cardProducto.css";

function CardProducto(props) {
  let { precio, nombre, img, descripcion, stock } = props;

  return (
    <div className="cardProducto">
      <div className="imagProducto">
        <img src={img} alt="" />
      </div>
      <div className="descripcionCard">
        <h4>{nombre}</h4>
        <p className="">{descripcion}</p>
        <h4>${precio}</h4>
        <p>Stock disponible: {stock}</p>
      </div>
      <Button colorInicial="red">Ver más</Button>
      <ItemCount 
        valorMin={1} 
        valorMax={stock}/>
    </div>
  );
}

export default CardProducto;