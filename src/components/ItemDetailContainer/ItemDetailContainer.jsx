import React, { useState, useEffect } from "react";
import ItemDetail from './ItemDetail';
import { getSingleItem } from "../../services/mockApi";
import { useParams } from "react-router-dom";
import "./itemDetail.css";
import { Spinner } from 'react-bootstrap';

function ItemDetailContainer() {
  const [data, setData] = useState({});
  const { id } = useParams();
  const [ loading, setLoading] = useState(true);

  useEffect(() => {
    getSingleItem(id).then((respuestaDatos) => {
      setData(respuestaDatos)
      setLoading(false)
    });
  }, [id]);

  return (
    <div>
      {!loading ?<ItemDetail data={data}/> : <Spinner animation="border" variant="primary"/>}
    </div>
  );
}

export default ItemDetailContainer;
