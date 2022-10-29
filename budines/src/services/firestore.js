import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  doc,
  getDoc,
  query,
  where,
  addDoc,
} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD7tI08N3YTovTDdeFl9MwoKU-t90SoM6s",
  authDomain: "budines-2e0f1.firebaseapp.com",
  projectId: "budines-2e0f1",
  storageBucket: "budines-2e0f1.appspot.com",
  messagingSenderId: "1051377826753",
  appId: "1:1051377826753:web:b4deabca93311138c74d40",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getFirestore(app);
const myCollection = collection(database, "budines ");


export async function getItems() {
  const querySnapshot = await getDocs(collection(database, "budines "));
  querySnapshot.forEach((doc) => {
    console.log(`${doc.id} => ${doc.data()}`);
  });

  let respuesta = await getDocs(myCollection);
console.log(respuesta, "respuestta");
  let dataDocs = respuesta.docs.map((documento) => {
    
    let docFormateado = { ...documento.data(), id: documento.id };
    return docFormateado;
  });
  return dataDocs;
}

export async function getSingleItem(idParams) {
  try {
    const docRef = doc(database, "budines ", idParams);
    const docSnapshot = await getDoc(docRef);
    return { ...docSnapshot.data(), id: docSnapshot.id };
  } catch (error) {
    console.error(error);
  }
}

export async function getItemsByCategory(catParams) {
  const collectionRef = collection(database, "budines ");
  const queryCategory = query(
    collectionRef,
    where("category", "==", catParams)
  );

  const respuesta = await getDocs(queryCategory);

  let dataDocs = respuesta.docs.map((documento) => {
    let docFormateado = { ...documento.data(), id: documento.id };
    return docFormateado;
  });

  return dataDocs;
}

export async function createBuyOrder(orderData) {
  const collectionRef = collection(database, "budines ");
  let respuesta = await addDoc(collectionRef, orderData);

  return respuesta.id;
}

export async function exportDataToFirestore() {
  const data = [
    {
      id: 1,
      title: "Banana con chips",
      price: "320",
      description: "Budín casero de banana con chips de chocolate",
      img: "/assets/Banana.jpg",
      stock: 4,
      category: "mezclas",
    },
    {
      id: 2,
      offer: true,
      title: "Coco",
      price: "250",
      description: "Budín de coco con saborizante y coco rallado",
      img: "../../assets/Coco.jpg",
      stock: 5,
      category: "simples",
    },
    {
      id: 3,
      title: "Chocolate",
      price: "300",
      description: "Budín de chocolate con cacao amargo y trozos de chocolate",
      img: "../../assets/Chocolate.jpg",
      stock: 0,
      category: "simples",
    },
    {
      id: 4,
      title: "Limón",
      price: "310",
      description: "Budín casero de limón con esencia y ralladura de limón",
      img: "../../assets/Limón.jpg",
      stock: 7,
      category: "simples",
    },
    {
      id: 5,
      title: "Marmolado",
      price: "330",
      description:
        "Budín marmolado, mezcla de sabores vainilla y chocolate amargo",
      img: "../../assets/Marmolado.jpg",
      stock: 5,
      category: "mezclas",
    },
    {
      id: 6,
      title: "Naranja",
      price: "310",
      description:
        "Budín de naranja, con pulpa, jugo y saborizante de naranja",
      img: "../../assets/Naranja (3).jpg",
      stock: 6,
      category: "simples",
    },
  ];

  const collectionRef = collection(database, "budines ");

  for (let item of data) {
    delete item.id;
    const newDoc = await addDoc(collectionRef, item);
    console.log("Doc created", newDoc.id);
  }
}

export default database;
