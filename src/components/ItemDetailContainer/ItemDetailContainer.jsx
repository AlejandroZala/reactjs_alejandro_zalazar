import React, { useState, useEffect } from "react";
import ItemCount from "../ItemCount/ItemCount";
import { getSingleItem } from "../../services/mockApi";
import { useParams } from "react-router-dom";
import "./itemDetail.css";

function ItemDetailContainer() {
  let [data, setData] = useState({});
  const { id } = useParams();

  useEffect(() => {
    getSingleItem(id).then((respuestaDatos) => setData(respuestaDatos));
  }, [id]);

  let estadoCart = false;

  function handleAddToCart () {
    alert('agregaste al carrito')
  }
  
  return (
    <div>
      <div className="detalleItem">
        <img src={data.img} alt="" />
        <div className="cajaDetalleItem">
          <h1>{data.nombre}</h1>
          <div className="cajaPrecioStockDetalle">
            <h2>${data.precio}</h2>
            <p>Stock disponible: {data.stock} unidades</p>

            {estadoCart === false ? (
            <ItemCount valorMin={1} valorMax={data.stock} onAddToCart={handleAddToCart}/>
            ):(
              <button> Finalizar compra</button>
              )}
            
              <p>{data.descripcion}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemDetailContainer;
