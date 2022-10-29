import ItemDetail from "./ItemDetail";
import React, { useState, useEffect } from "react";
import { getSingleItem } from "../../services/firestore";
import { useParams } from "react-router-dom";
import { Momentum } from "@uiball/loaders";

function ItemDetailContainer() {
  const [data, setData] = useState({});
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    getSingleItem(id)
      .then((respuestDatos) => setData(respuestDatos))
      .catch((errormsg) => {
        setError(errormsg.message);
      })
      .finally(() => setIsLoading(false));
  }, [id]);

  if (isLoading) {
    return (
      <>
        {error ? (
          <div>
            <h2 style={{ color: "red" }}> Error obteniendo los datos</h2>
            <p>{error} </p>
          </div>
        ) : (
          <Momentum size={68} speed={1.1} color="orange"/>
        )}
      </>
    );
  }

  return (
    <div>
      <ItemDetail item={data} />
    </div>
  );
}

export default ItemDetailContainer;
