import "./cart.css";
import Card from "./../Card/Card";
import { useEffect } from "react";
import { useProducts } from "./../products-context";

function Cart() {
  const { cartArray, setCartArray, wishlistArray, setWishlistArray } =
    useProducts();

  const removeFromCart = (id) => {
    setCartArray(cartArray.filter((cartItem) => cartItem.id !== id));
  };

  const moveToWishlist = (product) => {
    setWishlistArray([...wishlistArray, product]);
    removeFromCart(product.id);
  };

  const incrementCartItemQuantity = (id) => {
    cartArray.map((cartItem, index) => {
      if (cartItem.id === id) {
        setCartArray([
          ...cartArray.slice(0, index),
          { ...cartArray[index], bookQuantity: cartItem.bookQuantity + 1 },
          ...cartArray.slice(index + 1),
        ]);
      }
      return true;
    });
  };

  const decrementCartItemQuantity = (id) => {
    cartArray.map((cartItem, index) => {
      if (cartItem.id === id) {
        setCartArray([
          ...cartArray.slice(0, index),
          {
            ...cartArray[index],
            bookQuantity:
              cartItem.bookQuantity > 1 ? cartItem.bookQuantity - 1 : 1,
          },
          ...cartArray.slice(index + 1),
        ]);
      }
      return true;
    });
  };

  const cartTotal = cartArray.reduce((accumulator, currentValue) => {
    accumulator += currentValue.bookPrice * currentValue.bookQuantity;
    return accumulator;
  }, 0);

  const cartQuantity = cartArray.reduce((accumulator, currentValue) => {
    accumulator += currentValue.bookQuantity;
    return accumulator;
  }, 0);

  var shippingTotal = 25 + cartQuantity * 25;

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
                bookQuantity={product.bookQuantity}
                actionOne="Move To Wishlist"
                actionTwo="Remove From Cart"
                actionOneFunction={() => moveToWishlist(product)}
                actionTwoFunction={() => removeFromCart(product.id)}
                incrementCartItemQuantity={() =>
                  incrementCartItemQuantity(product.id)
                }
                decrementCartItemQuantity={() =>
                  decrementCartItemQuantity(product.id)
                }
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
