import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import ItemListContainer from "./components/Products/ItemListContainer";
import ItemDetail from "./components/ItemDetailContainer/ItemDetail";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartContextProvider from "./context/cartContext";
import CartView from "./components/CartView/CartView";

import { firestore } from "./services/firestore";

function App() {

  console.log("Firebase:", firestore);
  return (
    <CartContextProvider>
      <BrowserRouter>
        <div className="App">
          <Header />
          <Routes>
            <Route
              path="/"
              element={<ItemListContainer greeting="Mi tienda de budines" />}
            />
            <Route path="/category/:cat" element={<ItemListContainer />} />
            <Route path="/budines/:id" element={<ItemDetail />} />
            <Route path="/cart" element={<CartView />} />
            <Route path="*" element={<h1>404: Por acá no es, rey</h1>} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
