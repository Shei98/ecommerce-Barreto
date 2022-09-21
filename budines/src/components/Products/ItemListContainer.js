import React, { useEffect, useState } from "react";
import Card from "./Card";
import getItems from "../../services/mockAPI";

function ItemListContainer({ greeting }) {
  let [data, setData] = useState([]);

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
            <Card
              key={item.id}
              price={item.price}
              title={item.title}
              img={item.img}
              description={item.description}
            />
          );
        })}
      </div>
    </div>
  );
}


export default ItemListContainer;
