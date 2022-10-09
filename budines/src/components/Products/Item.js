import React from "react";
import Button from "../Button/Button";
import ItemCount from "../ItemCount/ItemCount";
import "./card.css";
import { Link } from "react-router-dom";

function Item(props) {
  let { title, offer, description, img, price, stock, id } = props;
  const urlDetalle = `/budines/${id}`;
  let classPrice = `priceTag ${offer && "offerTag"}`;

  return (
    <div className="card">
      <div onClick={props.onClickImagen} className="card-img">
        <img src={img} alt="card img"></img>
      </div>
      <div className="card-detail">
        <h3>{title}</h3>
        <p>{description}</p>
        <h4 className={classPrice}>$ {price}</h4>
      </div>

      <Link to={urlDetalle}>
        <Button> Ver más </Button>
      </Link>
      <ItemCount initial={1} stock={stock} />
    </div>
  );
}

export default Item;
