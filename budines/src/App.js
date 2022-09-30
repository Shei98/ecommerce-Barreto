import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import ItemListContainer from "./components/Products/ItemListContainer";
import ItemDetail from "./components/ItemDetailContainer/ItemDetail"

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route
            path="/"
            element={<ItemListContainer greeting="Mi tienda de budines" />}
          />
          <Route path="/category/:cat" element={<ItemListContainer />} />
          <Route path="/budines/:id" element={<ItemDetail/>} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
