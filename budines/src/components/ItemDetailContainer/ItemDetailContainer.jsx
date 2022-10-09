import ItemDetail from "./ItemDetail";
import React, { useState, useEffect } from "react";
import { getSingleItem } from "../../services/mockAPI";
import { useParams } from "react-router-dom";

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
          <h3>Cargando . . .</h3>
        )}
      </>
    );
  }

  return (
    <div>
      <ItemDetail item={data} />;
    </div>
  );
}

export default ItemDetailContainer;
