const data = [
    {
        id: 1,
        title: "Banana con chips",
        price: "$320",
        description: "Budín casero de banana con chips de chocolate",
        img:"/assets/Banana.jpg",
        stock:4,
        category:"mezclas"
    }
    ,{
        id: 2,
        title: "Coco",
        price: "$250",
        description: "Budín de coco con saborizante y coco rallado",
        img:"../../assets/Coco.jpg",
        stock:5,
        category:"simple"
    }
    ,{
        id: 3,
        title: "Chocolate",
        price: "$300",
        description: "Budín de chocolate con cacao amargo y trozos de chocolate",
        img:"../../assets/Chocolate.jpg",
        stock:6,
        category:"simple"
    }
    ,{
        id: 4,
        title: "Limón",
        price: "$310",
        description: "Budín casero de limón con esencia y ralladura de limón",
        img:"../../assets/Limón.jpg",
        stock:7,
        category:"simple"
    }
    ,{
        id: 5,
        title: "Marmolado",
        price: "$330",
        description: "Budín marmolado, mezcla de sabores vainilla y chocolate amargo",
        img:"../../assets/Marmolado.jpg",
        stock:5,
        category:"mezclas"
    }
];

export default function getItems(){
    return new Promise( (resolve, reject) => {
        setTimeout( () =>{
        resolve(data);
        }, 1500);
    });
  }