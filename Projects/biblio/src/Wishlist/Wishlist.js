import "./wishlist.css";
import Card from "../Card/Card";
import { useEffect, useState } from "react";
import { useProducts } from "./../products-context";
import Empty from "../Empty/Empty";
import emptyCart from "./../Media/empty-cart.png";

function Wishlist() {
  const [toastVisibility, setToastVisibility] = useState("hidden");
  const [toastText, setToastText] = useState("");
  const [toastColor, setToastColor] = useState({
    color: "",
    backgroundColor: "",
  });
  const { cartArray, setCartArray, wishlistArray, setWishlistArray } =
    useProducts();

  const moveToCart = (product) => {
    var productFlag = false;
    cartArray.map((cartItem, index) => {
      if (cartItem.id === product.id) {
        productFlag = true;
        setCartArray([
          ...cartArray.slice(0, index),
          { ...cartArray[index], bookQuantity: cartItem.bookQuantity + 1 },
          ...cartArray.slice(index + 1),
        ]);
      }
      return true;
    });
    if (productFlag === false) setCartArray([...cartArray, product]);
    setToastVisibility("visible");
    setToastText("Moved To Cart ✔");
    setToastColor({
      color: "white",
      backgroundColor: "green",
    });
    setTimeout(() => setToastVisibility("hidden"), 2000);
    setWishlistArray(
      wishlistArray.filter((wishlistItem) => wishlistItem.id !== product.id)
    );
  };

  const removeFromWishlist = (id) => {
    setWishlistArray(
      wishlistArray.filter((wishlistItem) => wishlistItem.id !== id)
    );
    setToastVisibility("visible");
    setToastText("Removed From Wishlist ✔");
    setToastColor({
      color: "white",
      backgroundColor: "red",
    });
    setTimeout(() => setToastVisibility("hidden"), 2000);
  };

  useEffect(() => {
    localStorage.setItem("CART_ARRAY", JSON.stringify(cartArray));
    localStorage.setItem("WISHLIST_ARRAY", JSON.stringify(wishlistArray));
  }, [cartArray, wishlistArray]);

  return (
    <div className="Wishlist">
      <p
        style={{
          visibility: toastVisibility,
          backgroundColor: toastColor.backgroundColor,
          color: toastColor.color,
        }}
        className="message-toast"
      >
        {toastText}
      </p>
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
