import React from 'react'
import Button from '../Button/Button';
import "./card.css";

function Card ({title, description, img, price}) {
  return (
    <div className="card">
        <div className="card-img">
            <img src={img}alt="card img"></img>
        </div>
        <div className= "card-detail">
            <h3>{title}</h3>
            <p>{description}</p>
            <h4>{price} </h4>
        </div>
        <Button color="red">
        Ver más
        </Button>
    </div> 
  )
}

export default Card;