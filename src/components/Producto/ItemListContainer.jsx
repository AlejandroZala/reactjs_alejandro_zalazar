import React, {useState, useEffect} from "react";
import Item from "./Item";
import { useParams } from "react-router-dom";
import getItems, {getItemsByCategory} from "../../services/mockApi";

function ItemListContainer(props) {

  let [data, setData] = useState([]);
  const {cat} = useParams();

  useEffect(() => {
    if (cat === undefined){
      getItems().then((respuestaDatos) => setData (respuestaDatos));
    }
    else {
      getItemsByCategory(cat).then((respuestaDatos) => setData (respuestaDatos));
    }
  }, [cat]);

  return (
    <div>
      <h2>{props.greeting}</h2>
      <div className="main container">
        {data.map((item) => {
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