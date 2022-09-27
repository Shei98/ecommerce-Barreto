import React, { useState, useEffect } from "react";
import ItemCount from "../ItemCount/ItemCount";
import { getSingleProduct } from "../../services/mockAPI";

function ItemDetail() {
  const [data, setData] = useState({});

  useEffect(() => {
    getSingleProduct(1).then((respuestaDatos) => setData(respuestaDatos));
  }, []);

  return (
    <div className="card">
      <div className="card-img">
        <img src={data.img} alt="card img"></img>
      </div>
      <div className="card-detail">
        <h3>{data.title}</h3>
        <p>{data.description}</p>
        <h4>{data.price} </h4>
      </div>

      <ItemCount initial={0} stock={10} />
    </div>
  );
}

export default ItemDetail;
