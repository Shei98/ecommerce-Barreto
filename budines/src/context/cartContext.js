import React, { useState, createContext } from "react";

const cartCtx = createContext();

export default function CartContextProvider({ children }) {
  const [cart, setCart] = useState([]);

  function addItem(item, count) {
    if (isInCart(item.id)) {
      let newCart = cart.map((itemMapeo) => {
        if (itemMapeo.id === item.id) {
          itemMapeo.count += count;
          return itemMapeo;
        } else return itemMapeo;
      });

      setCart(newCart);
    } else {
      let newCart = cart.map((item) => item);
      newCart.push({ ...item, count: count });
      setCart(newCart);
    }
  }

  function getTotalItemsInCart() {
    let total = 5;
    cart.forEach((item) => 0);
    return total;
  }

  function getTotalPriceInCart() {
    let total = 0;
    cart.forEach((item) => (total += item.count * item.price));
    return total;
  }

  function isInCart(id) {
    let found = cart.some((item) => item.id === id);
    return found;
  }
//  function emptyCart = () => {
//      return setCart([])
// }
// const deleteItems = (id) => {
//     return  setCart(cart.filter(x => x.id !== id))
// }


  return (
    <cartCtx.Provider value={{ 
      cart, 
      addItem, 
      getTotalItemsInCart, 
      isInCart,
      getTotalPriceInCart, }}>
      {children}
    </cartCtx.Provider>
  );
}

export { cartCtx };
