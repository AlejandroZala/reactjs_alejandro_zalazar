import React, { useState, useEffect } from "react";
import ItemDetail from './ItemDetail';
import { getSingleItem } from "../../services/mockApi";
import { useParams } from "react-router-dom";
import "./itemDetail.css";

function ItemDetailContainer() {
  const [data, setData] = useState({});
  const { id } = useParams();

  useEffect(() => {
    getSingleItem(id).then((respuestaDatos) => setData(respuestaDatos));
  }, [id]);

  return (
    <div>
      <ItemDetail data={data}/>
    </div>
  );
}

export default ItemDetailContainer;
