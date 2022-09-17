import React from 'react';
import CardProducto from "./CardProducto";

function ItemList(props) {
  return (
    <div className="main container">
        {props.data.map((item) => {
            console.log(item);
            return <CardProducto
                        key={item.id}
                        nombre={item.nombre}
                        precio={item.precio}
                        img={item.img}
                        descripcion={item.descripcion}/>
    })}
    </div>
  )
}

export default ItemList;