
import React from "react";
import "./navbar.css";
// import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="nav-bar">
      <ul className="menu">
        <Link to="/">
          <h2>Mis budines</h2>
        </Link>
        <li>
          <Link to="/category/mezclas">Mezclas</Link>
        </li>
        <li>
          <Link to="/category/simples">Simples</Link>
        </li>
        <li>
          {/* <CartWidget /> */}
        </li>
      </ul>
    </div>
  );
}

export default NavBar;