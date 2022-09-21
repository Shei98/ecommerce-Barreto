import React, { useEffect, useState } from "react";
import Item from "./Item";
import getItems from "../../services/mockAPI";

export default function ItemListContainer({ greeting }) {
  const [data, setData] = useState([]);

   useEffect(
    () =>{
      getItems().then((respuestaDatos) => {
      setData(respuestaDatos);
    });
    },
    []
   ) 

  return (
    <div>
      <h1> {greeting} </h1>
      <div className="container">
        {data.map((item) => {
          return (
            <Item
              key={item.id}
              price={item.price}
              title={item.title}
              img={item.img}
              description={item.description}
              stock={item.stock}
            />
          );
        })}
      </div>
    </div>
  );
}


