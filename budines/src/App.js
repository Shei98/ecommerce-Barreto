import './App.css';
import Footer from './components/Footer/Footer';
import Header from "./components/Header/Header";
import ItemListContainer from './components/Products/ItemListContainer';

function App() {

  return (
    <div className="App">
      <Footer/>
      <Header />
      <ItemListContainer greeting="Mi tienda de budines"/>
    </div>
  );
}


export default App;
