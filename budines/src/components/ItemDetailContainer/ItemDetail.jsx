import React, { useState, useEffect } from "react";
import ItemCount from "../ItemCount/ItemCount";
import { getSingleProduct } from "../../services/mockAPI";
import { useParams } from "react-router-dom";
import FlexWrapper from "../FlexWrapper/FlexWrapper";

function ItemDetail({item}) {
    let estado = false;

  const handleAddToCart = (quantity) => {
    console.log(quantity);
  }

  const [data, setData] = useState({});

  const { id } = useParams();
  useEffect(() => {
    getSingleProduct(id).then((respuestaDatos) => setData(respuestaDatos));
  }, [id]);

  return (
    <FlexWrapper rows={true} >
      <div className="card">
        <div className="card-img">
          <img src={data.img} alt="card img"></img>
        </div>
        <div className="card-detail">
          <h3>{data.title}</h3>
          <p>{data.description}</p>
          <h4>{data.price} </h4>
        </div>

        {estado === false ? (
          <ItemCount initial={0} stock={10} onAddToCart={handleAddToCart} />
        ) : (
          <button>Finalizar Compra</button>
        )}
      </div>
    </FlexWrapper>
  );
}

export default ItemDetail;
