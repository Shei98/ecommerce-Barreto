import React from "react";
import Card from "./Card";

function ItemListContainer({greeting}) {
  return (
    <div>
      <h1> {greeting} </h1>
      <div className="container">
        <Card title="Banana con chips"
          price="$320"
          description="Budín casero de banana con chips de chocolate"
          img="../../assets/Banana.jpg"
        />
        <Card title="Coco"
          price="$250"
          description="Budín de coco con saborizante y coco rallado"
          img="../../assets/Coco.jpg"
        />
        <Card 
        title="Chocolate" 
        price="$300"
        description="Budín de chocolate con cacao amargo y trozos de chocolate"
        img="../../assets/Chocolate.jpg"
        />
      </div>
     </div>
  );
}

export default ItemListContainer;
