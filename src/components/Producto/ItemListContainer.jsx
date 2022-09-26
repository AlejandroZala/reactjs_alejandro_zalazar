import React, {useState, useEffect} from "react";
import Item from "./Item";
import getItems from "../../services/mockApi";

function ItemListContainer(props) {

  let [data, setData] = useState([]);

  useEffect(() => {
    getItems().then((respuestaDatos) => {
      setData (respuestaDatos);
    });
  }, []);

  return (
    <div>
      <h2>{props.greeting}</h2>
      <div className="main container">
        {data.map((item) => {
            console.log(item);
            return <Item
                        key={item.id}
                        id={item.id}
                        nombre={item.nombre}
                        precio={item.precio}
                        img={item.img}
                        descripcion={item.descripcion}
                        stock={item.stock}/>
      })}
      </div>
    </div>
  )
}

export default ItemListContainer;