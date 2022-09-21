import React from 'react'
import ItemCount from '../ItemCount/ItemCount';
import "./card.css";

function Item ({title, description, img, price}) {
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

        <ItemCount initial={0} stock={10}  />
    </div> 
    
  )
}

export default Item;