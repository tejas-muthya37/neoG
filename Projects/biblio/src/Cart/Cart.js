import "./cart.css";
import Card from "./../Card/Card";
import { useEffect, useState } from "react";

function Cart(props) {
  var storedCartArray = JSON.parse(localStorage.getItem("CART_ARRAY"));
  if (storedCartArray === undefined) storedCartArray = [];

  const [cartArray, setCartArray] = useState(storedCartArray);

  const removeFromCart = (id) => {
    setCartArray(cartArray.filter((cartItem) => cartItem.id !== id));
  };

  var storedWishlistArray = JSON.parse(localStorage.getItem("WISHLIST_ARRAY"));
  if (storedWishlistArray === undefined) storedWishlistArray = [];

  const [wishlistArray, setWishlistArray] = useState(storedWishlistArray);

  const moveToWishlist = (product) => {
    setWishlistArray([...wishlistArray, product]);
    removeFromCart(product.id);
  };

  const cartTotal = cartArray.reduce((accumulator, currentValue) => {
    accumulator += currentValue.bookPrice;
    return accumulator;
  }, 0);

  var shippingTotal;
  if (cartArray.length < 3) {
    shippingTotal = 50;
  } else if (cartArray.length < 6) {
    shippingTotal = 100;
  } else {
    shippingTotal = 150;
  }

  useEffect(() => {
    localStorage.setItem("CART_ARRAY", JSON.stringify(cartArray));
    localStorage.setItem("WISHLIST_ARRAY", JSON.stringify(wishlistArray));
  }, [cartArray, wishlistArray]);

  return (
    <div className="Cart">
      <h1 className="cart-title">MY CART</h1>
      <div className="landing-page-container cart">
        <div className="landing-page-content cart">
          {cartArray.map((product, index) => {
            return (
              <Card
                key={index}
                bookCover={product.bookCover}
                bookTitle={product.bookTitle}
                bookAuthor={product.bookAuthor}
                bookPrice={product.bookPrice}
                actionOne="Move To Wishlist"
                actionTwo="Remove From Cart"
                actionOneFunction={() => moveToWishlist(product)}
                actionTwoFunction={() => removeFromCart(product.id)}
                cartPage={true}
              />
            );
          })}
        </div>
        <div className="order-details">
          <h3>Order Details</h3>
          <div className="pricing-details">
            <div className="price-display">
              <p className="price-title">Cart Total</p>
              <p className="price-value-string">
                <span className="price-value">₹</span>
                {cartTotal}
              </p>
            </div>
            <div className="shipping-cost-display">
              <p className="shipping-cost-title">Shipping Cost</p>
              <p className="shipping-cost-value-string">
                ₹<span className="shipping-cost-value">{shippingTotal}</span>
              </p>
            </div>
          </div>
          <div className="total-price">
            <p className="total-price-display">Grand Total</p>
            <p className="total-price-value-string">
              ₹
              <span className="total-price-value">
                {cartTotal + shippingTotal}
              </span>
            </p>
          </div>
          <button className="btn-checkout">Place Order</button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
