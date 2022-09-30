import React from "react";
import Button from "../Button/Button";
import ItemCount from "../ItemCount/ItemCount";
import "./card.css";
import { Link } from "react-router-dom";

function Item({ title, description, img, price, stock, id }) {
  const urlDetalle = `/budines/${id}`;
  return (
    <div className="card">
      <div className="card-img">
        <img src={img} alt="card img"></img>
      </div>
      <div className="card-detail">
        <h3>{title}</h3>
        <p>{description}</p>
        <h4>{price} </h4>
      </div>
      <Link to={urlDetalle}>
        <Button> Ver más </Button>
      </Link>
      <ItemCount initial={1} stock={stock} />
    </div>
  );
}

export default Item;
