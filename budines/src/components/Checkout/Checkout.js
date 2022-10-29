import { useParams } from "react-router-dom";
import './Checkout.css'


function Checkout() {

    const { orderid } = useParams();

    return (
        <div className="checkout-text">
            <h2>Gracias por tu compra! Tu numero de orden es: <span className="order-text">{orderid}</span></h2>
        </div>
    )
}

export default Checkout
