import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  doc,
  getDoc,
  query,
  where,
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
const firestore = getFirestore(app);

export async function getItems() {
  const colleccionRef = collection("budines", firestore);
  let respuesta = await getDocs(colleccionRef);

  let dataDocs = respuesta.docs.map((documento) => {
    let docFormateado = { ...documento.data(), id: documento.id};
    return docFormateado;
  });
  return dataDocs;
}

export async function getSingleItem(idParams) {
  try {
    const docRef = doc(firestore, "alquileres", idParams);
    const docSnapshot = await getDoc(docRef);
    return { ...docSnapshot.data(), id: docSnapshot.id };
  } catch (error) {
    console.error(error);
  }
}

export async function getItemsByCategory(catParams) {
  const collectionRef = collection(firestore, "alquileres");
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

export default firestore;
