import React from 'react';
import ItemCount from '../ItemCount/ItemCount';

let estadoCart = false;

function handleAddToCart (count) {
    alert(`agregaste al carrito ${count} productos`)
  }

function ItemDetail( {data}) {
  return (
    <div className="detalleItem">
        <img src={data.img} alt="" />
        <div className="cajaDetalleItem">
            <h1>{data.nombre}</h1>
            <div className="cajaPrecioStockDetalle">
                <h2>${data.precio}</h2>
                <p>Stock disponible: {data.stock} unidades</p>

                {estadoCart === false ? (
                    <ItemCount 
                        valorMin={1} 
                        valorMax={data.stock} 
                        onAddToCart={handleAddToCart}/>
                    ):(
                    <button> Finalizar compra</button>
                )}
                
                <p>{data.descripcion}</p>
            </div>
        </div>
    </div>
  )
}

export default ItemDetail