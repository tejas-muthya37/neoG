import "./success.css";
import { useProducts } from "./../products-context.js";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Empty from "../Empty/Empty";
import emptyImage from "./../Media/empty-cart.png";

function Success() {
  const { cartArray, setCartArray } = useProducts();

  useEffect(() => {
    setCartArray([]);
    localStorage.setItem("CART_ARRAY", JSON.stringify([]));
  }, [setCartArray]);

  return (
    <div className="Success">
      {cartArray.length > 0 && (
        <div>
          <span>✔</span>
          <h1>Your order has been placed!</h1>
          <Link to="/">
            <button className="btn-continue-shopping">Continue Shopping</button>
          </Link>
        </div>
      )}
      {cartArray.length === 0 && (
        <Empty emptyImage={emptyImage} emptyTitle="cart" />
      )}
    </div>
  );
}

export default Success;
