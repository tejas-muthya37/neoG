import "./wishlist.css";
import Card from "../Card/Card";
import { useEffect, useState } from "react";

function Wishlist() {
  var storedCartArray = JSON.parse(localStorage.getItem("CART_ARRAY"));
  if (storedCartArray === undefined) storedCartArray = [];

  const [cartArray, setCartArray] = useState(storedCartArray);

  const moveToCart = (product) => {
    setCartArray([...cartArray, product]);
    removeFromWishlist(product.id);
  };

  var storedWishlistArray = JSON.parse(localStorage.getItem("WISHLIST_ARRAY"));
  if (storedWishlistArray === undefined) storedWishlistArray = [];

  const [wishlistArray, setWishlistArray] = useState(storedWishlistArray);

  const removeFromWishlist = (id) => {
    setWishlistArray(
      wishlistArray.filter((wishlistItem) => wishlistItem.id !== id)
    );
  };

  useEffect(() => {
    localStorage.setItem("CART_ARRAY", JSON.stringify(cartArray));
    localStorage.setItem("WISHLIST_ARRAY", JSON.stringify(wishlistArray));
  }, [cartArray, wishlistArray]);

  return (
    <div className="Wishlist">
      <h1 className="wishlist-title">MY WISHLIST</h1>
      <div className="landing-page-container wishlist">
        {wishlistArray.map((product, index) => {
          return (
            <Card
              key={index}
              bookCover={product.bookCover}
              bookTitle={product.bookTitle}
              bookAuthor={product.bookAuthor}
              bookPrice={product.bookPrice}
              actionOne="Move To Cart"
              actionTwo="Remove From Wishlist"
              actionOneFunction={() => moveToCart(product)}
              actionTwoFunction={() => {
                removeFromWishlist(product.id);
              }}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Wishlist;
