import { cartCtx } from "../../context/cartContext";
import "./CartView.css";
import { Link } from "react-router-dom";
import CheckoutForm from "../CheckoutForm/CheckoutForm";
import { useContext } from "react";
import Button from "../Button/Button";

function CartView() {
  const context = useContext(cartCtx);
  const { cart, deleteItems, emptyCart } = context;

  if (cart.length === 0) {
    return (
      <div>
        <h2> Tu carrito está vacio, necesitas comprar un objeto</h2>
        <Link to="/">
          <Button>Seguir navegando</Button>
        </Link>
      </div>
    );
  }

  return (
    <>
      <h1 className="title_cart">Carrito de compras</h1>
      <table className="table">
        <thead className="tablet_thead">
          <tr className="tr">
            <th>Imagen</th>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Cantidad</th>
            <th>Eliminar</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item) => {
            return (
              <tr key={item.id} className="">
                <td>
                  <img height={50} src={item.img} alt={item.title} />
                </td>
                <td>{item.title}</td>
                <td>$ {item.price}</td>
                <td>{item.count}</td>
                <td>
                  <Button onClick={() => deleteItems(item.id)}>X</Button>
                </td>
                <th>El total de tu compra es $ {item.price * item.count}</th>
              </tr>
            );
          })}
        </tbody>
      </table>
      <CheckoutForm />
      <Link to="/">
        <Button>Seguir navegando</Button>
      </Link>
      <Button className="btn" onClick={emptyCart}>
        Vaciar mi carrito
      </Button>
    </>
  );
}
export default CartView;
