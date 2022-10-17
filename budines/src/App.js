import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import ItemListContainer from "./components/Products/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartContextProvider from "./context/cartContext";
import CartView from "./components/CartView/CartView";


function App() {

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
            <Route path="/budines/:id" element={<ItemDetailContainer />} />
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
