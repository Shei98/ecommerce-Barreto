import React, { useState, useContext } from "react";
import ItemCount from "../ItemCount/ItemCount";
import FlexWrapper from "../FlexWrapper/FlexWrapper";
import { cartCtx } from "../../context/cartContext";

function ItemDetail({ item }) {
  const [isInCart, setIsInCart] = useState(false);
  const { addItem } = useContext(cartCtx);

  function handleAddToCart(quantity) {
    addItem(item, quantity);
    setIsInCart(true);
  }
  const stylePrice = {
    color: item.offer ? "#22cc77" : "#333333",
  };

  const [data] = useState({});

  return (
    <FlexWrapper rows={true}>
      <div className="card">
        <div className="card-img">
          <img src={data.img} alt="card img"></img>
        </div>
        <div className="card-detail">
          <h3>{data.title}</h3>
          <p>{data.description}</p>
          <h4 style={stylePrice}>{data.price} </h4>
        </div>
        {item.stock === 0 && (
          <span style={{ color: "red" }}>Producto sin stock</span>
        )}

        {isInCart === false ? (
          <ItemCount stock={10} onAddToCart={handleAddToCart} />
        ) : (
          <button>Finalizar Compra</button>
        )}
      </div>
    </FlexWrapper>
  );
}

export default ItemDetail;
