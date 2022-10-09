import React from "react";
import { useContext } from "react";
import { cartCtx } from "../../context/cartContext";
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
        <div>
          <img className="cartview-img" src={item.img} alt={item.title} />
          <p>{item.price}</p>
          <p>{item.count}</p>
          <strong>{item.price * item.count}</strong>
          <span
            className="cartview-button-delete"
            onClick={() => removeFromCart(item.id)}
          ></span>
        </div>
      ))}

      <div className="cartview-total-container">
        <button className="cartview-button-emptycard" onClick={clearCart}>
          Vaciar carrito
        </button>
        <button className="cartview-button-finish">Finalizar Compra</button>
      </div>
    </div>
  );
}

export default CartView;
