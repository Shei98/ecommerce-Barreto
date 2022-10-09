import React, { useState, useEffect } from "react";
import Item from "./Item";
import { useParams } from "react-router-dom";
import { Momentum } from "@uiball/loaders";

import getItems, { getItemsByCategory } from "../../services/mockAPI";

function ItemListContainer() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const { cat } = useParams();

  useEffect(() => {
    setData([]);
    setIsLoading(true);
    if (cat === undefined) {
      getItems()
        .then((respuestaDatos) => setData(respuestaDatos))
        .finally(() => setIsLoading(false));
    } else {
      getItemsByCategory(cat)
        .then((respuestaDatos) => setData(respuestaDatos))
        .finally(() => setIsLoading(false));
    }
    return () => {
      console.log("Componente Item List desmontado");
    };
  }, [cat]);

  return (
    <div>
      {isLoading ? (
        <Momentum size={68} speed={1.1} color="orange" />
      ) : (
        <div className="main container">
          {data.map((item) => {
            return (
              <Item
                onClickImagen={() => {
                  console.log("click card");
                }}
                key={item.id}
                offer={item.offer}
                id={item.id}
                price={item.price}
                title={item.title}
                img={item.img}
                detail={item.detail}
                stock={item.stock}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}

export default ItemListContainer;