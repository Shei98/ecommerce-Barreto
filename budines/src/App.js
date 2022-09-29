import './App.css';
import Footer from './components/Footer/Footer';
import Header from "./components/Header/Header";
import ItemListContainer from './components/Products/ItemListContainer';
import Button from "./components/Button/Button"
import FlexWrapper from "./components/FlexWrapper/FlexWrapper";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";

function App() {

  return (
    <div className="App">

      <Header />
      <ItemListContainer greeting="Mi tienda de budines"/>
      
      <FlexWrapper>
      <Button>Click Me</Button>
      </FlexWrapper>
      <ItemDetailContainer />
      <Footer/>

    </div>
  );
}


export default App;
