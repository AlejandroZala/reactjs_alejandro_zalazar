import React from "react";
import Button from "../Button/Button";
import "./cardProducto.css";

function CardProducto(props) {
  let { precio, nombre, img, descripcion } = props;

  return (
    <div className="cardProducto">
      <div className="imagProducto">
        <img src={img} alt="" />
      </div>
      <div className="descripcionCard">
        <h4>{nombre}</h4>
        <p className="">{descripcion}</p>
        <h4>${precio}</h4>
      </div>
      <Button color="red">Ver más</Button>
    </div>
  );
}

export default CardProducto;