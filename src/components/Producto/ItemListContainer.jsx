import React, {useState, useEffect} from "react";
import ItemList from "./ItemList";
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
      <ItemList data={data}/>
    </div>
  )
}

export default ItemListContainer;