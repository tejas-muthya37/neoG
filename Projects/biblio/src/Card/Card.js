import "./card.css";
import { useState } from "react";

function Card(props) {
  const [cartItemQuantity, setCartItemQuantity] = useState(1);

  const updateCartItemQuantity = (event) => {
    if (event.target.innerText === "+")
      setCartItemQuantity(cartItemQuantity + 1);
    else if (event.target.innerText === "-") {
      if (cartItemQuantity > 1) setCartItemQuantity(cartItemQuantity - 1);
    }
  };

  return (
    <div className="Card">
      <div className="card-e-commerce">
        <img className="item-image" src={props.bookCover} alt="book-cover" />
        <div className="item-content">
          <p className="item-title">
            {props.bookTitle}
            <span className="item-author">
              <br />
              by {props.bookAuthor}
            </span>
          </p>

          <div className="price-with-quantity">
            <p className="item-price-string">
              ₹ <span className="item-price">{props.bookPrice}</span>
            </p>
            {props.cartPage && (
              <div className="quantity-group">
                <button
                  onClick={(event) => updateCartItemQuantity(event)}
                  className="btn-decrement"
                >
                  -
                </button>
                <span className="quantity-value">{cartItemQuantity}</span>
                <button
                  onClick={(event) => updateCartItemQuantity(event)}
                  className="btn-increment"
                >
                  +
                </button>
              </div>
            )}
          </div>
          <div className="button-group">
            <button
              onClick={props.actionOneFunction}
              className="btn-action-one"
            >
              {props.actionOne}
            </button>
            <button
              onClick={props.actionTwoFunction}
              className="btn-action-two"
            >
              {props.actionTwo}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
