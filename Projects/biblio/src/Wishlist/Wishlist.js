import "./wishlist.css";
import Card from "../Card/Card";
import { useEffect } from "react";
import { useProducts } from "./../products-context";
import Empty from "../Empty/Empty";
import emptyImage from "./../Media/empty-cart.png";
import { useToast } from "./../toast-context";

function Wishlist() {
  const { toggleToast, toastVisibility, toastColor, toastText } = useToast();

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
    toggleToast("Moved To Cart ✔", "green", "whitesmoke");
    setWishlistArray(
      wishlistArray.filter((wishlistItem) => wishlistItem.id !== product.id)
    );
  };

  const removeFromWishlist = (id) => {
    setWishlistArray(
      wishlistArray.filter((wishlistItem) => wishlistItem.id !== id)
    );
    toggleToast("Removed From Wishlist ✔", "red", "whitesmoke");
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
      {wishlistArray.length > 0 && (
        <h1 className="wishlist-title">MY WISHLIST</h1>
      )}
      {wishlistArray.length > 0 && (
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
      )}
      {wishlistArray.length === 0 && (
        <Empty emptyImage={emptyImage} emptyTitle="wishlist" />
      )}
    </div>
  );
}

export default Wishlist;
