import "./success.css";
import { useProducts } from "./../products-context.js";
import { useEffect } from "react";
import { Link } from "react-router-dom";

function Success() {
  const { cartArray, setCartArray } = useProducts();

  useEffect(() => {
    setCartArray([]);
    localStorage.setItem("CART_ARRAY", JSON.stringify(cartArray));
  }, []);

  return (
    <div className="Success">
      <span>✔</span>
      <h1>Your order has been placed!</h1>
      <Link to="/">
        <button className="btn-continue-shopping">Continue Shopping</button>
      </Link>
    </div>
  );
}

export default Success;
