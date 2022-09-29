import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import ItemListContainer from "./components/Products/ItemListContainer";

import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
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
          <Route path="/category/:cat" element={
            <ItemListContainer/>
          } ></Route>
          <Route path="/budines/:id" element={<ItemDetailContainer />}></Route>
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
