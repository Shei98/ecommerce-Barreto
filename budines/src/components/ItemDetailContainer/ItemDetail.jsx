import React, { useState, useContext } from "react";
import ItemCount from "../ItemCount/ItemCount";
import FlexWrapper from "../FlexWrapper/FlexWrapper";
import { cartCtx } from "../../context/cartContext";
import { Link } from "react-router-dom";

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

  return (
    <FlexWrapper rows={true}>
      <div className="card">
        <div className="card-img">
          <img src={item.img} alt="card img"></img>
        </div>
        <div className="card-detail">
          <h3>{item.title}</h3>
          <p>{item.description}</p>
          <h4 style={stylePrice}>${item.price} </h4>
        </div>
        {item.stock === 0 && (
          <span style={{ color: "red" }}>Producto sin stock</span>
        )}

        {isInCart ? (
          <Link to="/cart">Ir al carrito</Link>
        ) : (
          <ItemCount initial={1} stock={item.stock} onAddToCart={handleAddToCart} />
        )}
      </div>
    </FlexWrapper>
  );
}

export default ItemDetail;
