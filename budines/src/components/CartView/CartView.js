import React from "react";
import { useContext } from "react";
import { cartCtx } from "../../context/cartContext";
import Button from "../Button/Button";
import "./CartView.css";

function CartView() {
  const context = useContext(cartCtx);
  const { cart, clearCart, removeFromCart } = context;

  let carritovacio = false;

  if (carritovacio) {
    return <div>Tu carrito está vacio...</div>;
  }

  return (
    <div>
      {cart.map((item) => (
        <div className="containerCartView">
          <img className="cartview-img" src={item.img} alt={item.title} />
          <h3>{item.title} </h3>
          <h3>${item.price}</h3>
          <h3>{item.count}</h3>
          <strong>${item.price * item.count}</strong>
          <span
            className="cartview-button-delete"
            onClick={() => removeFromCart(item.id)}
          ></span>
        </div>
      ))}

      <div className="cartview-total-container">
        <Button className="cartview-button-emptycard" onClick={clearCart}>
          Vaciar carrito
        </Button>
        <Button className="cartview-button-finish">Finalizar Compra</Button>
      </div>
    </div>
  );
}

export default CartView;
