import React from "react";

const ItemCount = (props) => {
  const [count, setCount] = React.useState(props.initial);

  function handleAdd() {
    setCount(count + 1);
  }
  function handleSubstract() {
    setCount(count - 1);
  }

  return (
    <div>
      <button onClick={handleSubstract}>-</button>
      <span>{count} </span>
      <button onClick={handleAdd}>+</button>
      <button>Finalizar Compra</button>
    </div>
  );
};

export default ItemCount;
