import React, {useState} from "react";
import "./itemcount.css";


export const ItemCount = ({ initial, stock, onAddToCart }) => {
  const [count, setCount] = useState(initial);

  const decrease = () => {
    setCount(count - 1);
  };

  const increase = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <button onClick={decrease} disabled={count <= 0}>{" "} - {" "} </button>
      <span>{count} </span>
      <button onClick={increase} disabled={count >= stock}>{" "} + {" "} </button>
      <div className="btnAgregarCarrito">
      <button disabled={stock <=0} onClick={() => onAddToCart (count)} >Agregar al carrito</button>{" "}
      </div>
    </div>
  );
};

export default ItemCount;