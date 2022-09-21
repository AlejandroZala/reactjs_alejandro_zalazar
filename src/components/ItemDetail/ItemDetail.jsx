import React, {useState,useEffect} from 'react';
import {getSingleItem} from '../../services/mockApi';
import "./itemDetail.css"

function ItemDetail() {

    let [data, setData] = useState({});

    useEffect(() => {
        getSingleItem().then((respuestaDatos) => setData (respuestaDatos));
    }, []);
      
  return (
    <div>
        <div className='detalleItem'>
            <img src={data.img} alt="" />
            <div className='cajaDetalleItem'>
                <h1>{data.nombre}</h1>
                <div className='cajaPrecioStockDetalle'>
                    <h2>${data.precio}</h2>
                    <p>Stock disponible: {data.stock} unidades</p>
                    <p>{data.descripcion}</p>
                </div>
            </div>
        </div>

    </div>
  )
}

export default ItemDetail;