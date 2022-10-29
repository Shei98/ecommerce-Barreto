

import "./footer.css";
import { Link } from "react-router-dom";


function Footer() {
    return (
        <div>
            <footer className="footer">
                <h2>
                    <strong>My Ecommerce</strong>
                </h2>
                <ul>
                    <li><Link to="/category/Contacto">Contacto</Link></li>
                    <li><Link to="/category/Envios">Envios</Link></li>
                    <li><Link to="/category/Reclamos">Reclamos</Link></li>
                </ul>
            </footer>
        </div>
    );
}

export default Footer;