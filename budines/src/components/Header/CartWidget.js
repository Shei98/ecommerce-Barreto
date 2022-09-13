import React from 'react';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// 3 - Importar icono deseado de alguna de la libreria de iconos gratuitos
import { faCartArrowDown }  from "@fortawesome/free-solid-svg-icons";

function CartWidget() {
  return (
    <div>
      <FontAwesomeIcon icon={faCartArrowDown} />
      <span>0</span>
    </div>
    
  )
}

export default CartWidget