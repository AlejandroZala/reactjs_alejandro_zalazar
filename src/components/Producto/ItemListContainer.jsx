import React, {useState, useEffect} from "react";
import ItemList  from "./ItemList";
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
      <ItemList data={data}/>
    </div>
  )
}

export default ItemListContainer;