import React, { useEffect, useState } from "react";
import Item from "./Item";
import  getItems,{ getItemsByCategory } from "../../services/mockAPI";
import { useParams } from "react-router-dom";

export default function ItemListContainer({ greeting }) {

  let [data, setData] = useState([]);

  const {cat} = useParams();
  console.log(cat);

  useEffect(() => {
    if (cat === undefined) {
      getItems().then((respuestaDatos) => setData(respuestaDatos));
    } else {
      getItemsByCategory(cat).then((respuestaDatos) => setData(respuestaDatos));
    }
  }, [cat]);

  return (
    <div>
      <h1> {greeting} </h1>
      <div className="container">
        {data.map((item) => {
          return (
            item.stock > 0 && (
              <Item
                key={item.id}
                id={item.id}
                price={item.price}
                title={item.title}
                img={item.img}
                description={item.description}
                stock={item.stock}
              />
            )
          );
        })}
      </div>
    </div>
  );
}
