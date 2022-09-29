import Logo from "../Logo/Logo";
import NavBar from "../NavBar/navbar";
import "./header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="App-header">
      <NavBar />
      <Link to="/">
        <Logo />
        <img
          src="/assets/Logo sheilaBudines.png"
          className="App-logo"
          alt="logo"
        />
      </Link>
    </header>
  );
}

export default Header;
