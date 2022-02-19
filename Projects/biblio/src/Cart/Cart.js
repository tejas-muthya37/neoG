import "./cart.css";
import Card from "./../Card/Card";
import thrillerBookOne from "./../Media/thriller-book-1.jpg";

function Cart(props) {
  return (
    <div className="Cart">
      <h1 className="cart-title">MY CART</h1>
      <div className="landing-page-container cart">
        <div className="landing-page-content cart">
          <Card
            bookCover={thrillerBookOne}
            bookTitle="Murder On The Orient Express"
            bookAuthor="Agatha Christie"
            bookPrice={499}
            actionOne="Add To Cart"
            actionTwo="Add To Wishlist"
            cartPage={true}
            addToCartAction={addToCart}
          />
          <Card
            bookCover={thrillerBookOne}
            bookTitle="Murder On The Orient Express"
            bookAuthor="Agatha Christie"
            bookPrice={499}
            actionOne="Add To Cart"
            actionTwo="Add To Wishlist"
            cartPage={true}
            addToCartAction={addToCart}
          />
        </div>
        <div className="order-details">
          <h3>Order Details</h3>
          <div className="pricing-details">
            <div className="price-display">
              <p className="price-title">Cart Total</p>
              <p className="price-value-string">
                <span className="price-value">₹</span>
                {props.cartTotal}
              </p>
            </div>
            <div className="shipping-cost-display">
              <p className="shipping-cost-title">Shipping Cost</p>
              <p className="shipping-cost-value-string">
                ₹
                <span className="shipping-cost-value">
                  {props.shippingCost}
                </span>
              </p>
            </div>
          </div>
          <div className="total-price">
            <p className="total-price-display">Grand Total</p>
            <p className="total-price-value-string">
              ₹<span className="total-price-value">{props.grandTotal}</span>
            </p>
          </div>
          <button className="btn-checkout">Place Order</button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
