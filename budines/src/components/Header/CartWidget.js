import React, { useContext } from 'react';
import { cartCtx } from "../../context/cartContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// 3 - Importar icono deseado de alguna de la libreria de iconos gratuitos
import { faCartArrowDown }  from "@fortawesome/free-solid-svg-icons";

function CartWidget() {
  const { getTotalItemsInCart } = useContext(cartCtx); 
  return (
    <div>
      <FontAwesomeIcon icon={faCartArrowDown} />
      <span>0</span>
      <span>{getTotalItemsInCart()}</span>
    </div>
    
  )
}

export default CartWidget