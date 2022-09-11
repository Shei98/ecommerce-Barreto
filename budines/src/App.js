import './App.css';
import Footer from './components/Footer/Footer';

function App() {

  let styleH1 ={
    color: "white",
  textDecoration: "underline",
  marginTop: "100px"
  }


  return (
    <div className="App">
      <header className="App-header">
      <h1 style={styleH1}> Budines Sheila </h1>
      <img src="/assets/Logo sheilaBudines.png" className="App-logo" alt="logo" />
      </header>
      <Footer/>
    </div>
  );
}


export default App;
