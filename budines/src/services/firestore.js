import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD7tI08N3YTovTDdeFl9MwoKU-t90SoM6s",
  authDomain: "budines-2e0f1.firebaseapp.com",
  projectId: "budines-2e0f1",
  storageBucket: "budines-2e0f1.appspot.com",
  messagingSenderId: "1051377826753",
  appId: "1:1051377826753:web:b4deabca93311138c74d40"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

function getItems(){
const miColleccion = collection("budines", firestore);
let snapshotDB = getDocs(miColleccion);
return snapshotDB;
}

export default firestore ;