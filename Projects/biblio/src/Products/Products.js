import "./products.css";
import Card from "../Card/Card";
import { useEffect, useState } from "react";
import { useProducts } from "./../products-context";
import productsArray from "../productsArray";
import { useToast } from "./../toast-context";

function Products(props) {
  const [ratingFilters, setRatingFilters] = useState(false);
  const [rating4AndAbove, setRating4AndAbove] = useState(true);
  const [rating3AndAbove, setRating3AndAbove] = useState(true);
  const [rating2AndAbove, setRating2AndAbove] = useState(true);
  const [priceFilters, setPriceFilters] = useState(false);
  const [priceBelow150, setPriceBelow150] = useState(true);
  const [priceBelow250, setPriceBelow250] = useState(true);
  const [priceBelow350, setPriceBelow350] = useState(true);
  const [priceBelow450, setPriceBelow450] = useState(true);
  const [thrillerCategory, setThrillerCategory] = useState(true);
  const [romanceCategory, setRomanceCategory] = useState(true);
  const [dramaCategory, setDramaCategory] = useState(true);
  const [scifiCategory, setScifiCategory] = useState(true);
  const [categoryFilters, setCategoryFilters] = useState(false);
  const [sortFilters, setSortFilters] = useState(false);
  const [lowToHigh, setLowToHigh] = useState(false);
  const [highToLow, setHighToLow] = useState(false);

  const { toggleToast, toastVisibility, toastColor, toastText } = useToast();

  productsArray.map((product) => {
    if (product.bookCategory === "Thriller") {
      product.categoryFlag = thrillerCategory;
    } else if (product.bookCategory === "Drama") {
      product.categoryFlag = dramaCategory;
    } else if (product.bookCategory === "Scifi") {
      product.categoryFlag = scifiCategory;
    } else if (product.bookCategory === "Romance") {
      product.categoryFlag = romanceCategory;
    }

    if (product.bookRating === "4") {
      product.ratingFlag = rating4AndAbove;
    } else if (product.bookRating === "3") {
      product.ratingFlag = rating3AndAbove;
    } else if (product.bookRating === "2") {
      product.ratingFlag = rating2AndAbove;
    }

    if (product.bookPrice < 150) {
      product.priceFlag = priceBelow150;
    } else if (product.bookPrice < 250) {
      product.priceFlag = priceBelow250;
    } else if (product.bookPrice < 350) {
      product.priceFlag = priceBelow350;
    } else if (product.bookPrice < 450) {
      product.priceFlag = priceBelow450;
    }
    return true;
  });

  const { cartArray, setCartArray, wishlistArray, setWishlistArray } =
    useProducts();

  const addToCart = (product) => {
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
    toggleToast("Added To Cart ✔", "green", "whitesmoke");
  };

  const addToWishlist = (product) => {
    var wishlistFlag = false;
    wishlistArray.map((wishlistItem) => {
      if (wishlistItem.id === product.id) {
        wishlistFlag = true;
        return true;
      }
      return true;
    });
    if (wishlistFlag === false) {
      setWishlistArray([...wishlistArray, product]);
    }
    toggleToast("Added To Wishlist ✔", "green", "whitesmoke");
  };

  useEffect(() => {
    localStorage.setItem("CART_ARRAY", JSON.stringify(cartArray));
    localStorage.setItem("WISHLIST_ARRAY", JSON.stringify(wishlistArray));
  }, [cartArray, wishlistArray]);

  useEffect(() => {
    if (
      categoryFilters &&
      thrillerCategory === false &&
      dramaCategory === false &&
      scifiCategory === false &&
      romanceCategory === false
    ) {
      setThrillerCategory(true);
      setDramaCategory(true);
      setScifiCategory(true);
      setRomanceCategory(true);
      setCategoryFilters(false);
    }
  }, [
    categoryFilters,
    thrillerCategory,
    dramaCategory,
    scifiCategory,
    romanceCategory,
  ]);

  const applyCategoryFilters = (event) => {
    if (categoryFilters === false) {
      setCategoryFilters(true);
      setThrillerCategory(false);
      setRomanceCategory(false);
      setDramaCategory(false);
      setScifiCategory(false);
    }
    if (event.target.id === "thriller-category") {
      if (event.target.checked) setThrillerCategory(true);
      else setThrillerCategory(false);
    } else if (event.target.id === "romance-category") {
      if (event.target.checked) setRomanceCategory(true);
      else setRomanceCategory(false);
    } else if (event.target.id === "drama-category") {
      if (event.target.checked) setDramaCategory(true);
      else setDramaCategory(false);
    } else if (event.target.id === "scifi-category") {
      if (event.target.checked) setScifiCategory(true);
      else setScifiCategory(false);
    }
  };

  const applyRatingFilters = (event) => {
    if (ratingFilters === false) {
      setRatingFilters(true);
      setRating2AndAbove(false);
      setRating3AndAbove(false);
      setRating4AndAbove(false);
    }
    if (event.target.id === "rating-4-stars-and-above") {
      setRating4AndAbove(true);
    } else if (event.target.id === "rating-3-stars-and-above") {
      setRating3AndAbove(true);
      setRating4AndAbove(true);
    } else if (event.target.id === "rating-2-stars-and-above") {
      setRating2AndAbove(true);
      setRating3AndAbove(true);
      setRating4AndAbove(true);
    }
  };

  const applyPriceFilters = (event) => {
    if (priceFilters === false) {
      setPriceFilters(true);
    }
    setPriceBelow150(false);
    setPriceBelow250(false);
    setPriceBelow350(false);
    setPriceBelow450(false);
    if (event.target.value === "150") {
      setPriceBelow150(true);
    } else if (event.target.value === "250") {
      setPriceBelow150(true);
      setPriceBelow250(true);
    } else if (event.target.value === "350") {
      setPriceBelow150(true);
      setPriceBelow250(true);
      setPriceBelow350(true);
    } else if (event.target.value === "450") {
      setPriceBelow150(true);
      setPriceBelow250(true);
      setPriceBelow350(true);
      setPriceBelow450(true);
    }
    console.log(event.target.value);
  };

  const clearFilters = () => {
    window.location.reload();
  };

  const lowToHighArray = [...productsArray].sort((a, b) =>
    a.bookPrice > b.bookPrice ? 1 : -1
  );

  const applyLowToHighFilter = () => {
    setSortFilters(true);
    setLowToHigh(true);
    setHighToLow(false);
  };

  const highToLowArray = [...productsArray].sort((a, b) =>
    b.bookPrice > a.bookPrice ? 1 : -1
  );

  const applyHighToLowFilter = () => {
    setSortFilters(true);
    setHighToLow(true);
    setLowToHigh(false);
  };

  return (
    <div className="Products">
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
      <div className="landing-page-container">
        <div className="filter-section">
          <div className="filter-section-title">
            <h3> Filters </h3> <p onClick={clearFilters}> Clear </p>{" "}
          </div>{" "}
          <div className="price-filter">
            <h3 className="filter-header"> Price </h3>{" "}
            <input
              onChange={(event) => applyPriceFilters(event)}
              type="range"
              min="150"
              max="450"
              step="100"
            />
            <p>
              <span> 150 </span> <span> 250 </span> <span> 350 </span>{" "}
              <span> 450 </span>{" "}
            </p>{" "}
          </div>{" "}
          {props.productPage && (
            <div className="category-filter input-filter">
              <h3 className="filter-header"> Category </h3>{" "}
              <div>
                <input
                  id="thriller-category"
                  className="category-checkbox"
                  type="checkbox"
                  onChange={applyCategoryFilters}
                />{" "}
                <label htmlFor="thriller-category"> Thrillers </label>{" "}
              </div>{" "}
              <div>
                <input
                  id="drama-category"
                  className="category-checkbox"
                  type="checkbox"
                  onChange={applyCategoryFilters}
                />{" "}
                <label htmlFor="drama-category"> Drama </label>{" "}
              </div>{" "}
              <div>
                <input
                  id="scifi-category"
                  className="category-checkbox"
                  type="checkbox"
                  onChange={applyCategoryFilters}
                />{" "}
                <label htmlFor="scifi-category"> Sci - Fi </label>{" "}
              </div>{" "}
              <div>
                <input
                  id="romance-category"
                  className="category-checkbox"
                  type="checkbox"
                  onChange={applyCategoryFilters}
                />{" "}
                <label htmlFor="romance-category"> Romance </label>{" "}
              </div>{" "}
            </div>
          )}
          <div className="rating-filter input-filter">
            <h3 className="filter-header"> Rating </h3>{" "}
            <div>
              <input
                type="radio"
                id="rating-4-stars-and-above"
                name="rating-input"
                onClick={applyRatingFilters}
              />{" "}
              <label htmlFor="radio-1"> 4 Stars & above </label>{" "}
            </div>{" "}
            <div>
              <input
                type="radio"
                id="rating-3-stars-and-above"
                name="rating-input"
                onClick={applyRatingFilters}
              />{" "}
              <label htmlFor="radio-2"> 3 Stars & above </label>{" "}
            </div>{" "}
            <div>
              <input
                type="radio"
                id="rating-2-stars-and-above"
                name="rating-input"
                onClick={applyRatingFilters}
              />{" "}
              <label htmlFor="radio-3"> 2 Stars & above </label>{" "}
            </div>{" "}
          </div>{" "}
          <div className="sort-filter input-filter">
            <h3 className="filter-header"> Sort by </h3>{" "}
            <div>
              <input
                onChange={applyLowToHighFilter}
                type="radio"
                id="radio-5"
                name="sort-input"
              />
              <label htmlFor="radio-5"> Low to High </label>{" "}
            </div>{" "}
            <div>
              <input
                onChange={applyHighToLowFilter}
                type="radio"
                id="radio-6"
                name="sort-input"
              />
              <label htmlFor="radio-6"> High to Low </label>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
        <div className="landing-page-content">
          {" "}
          {sortFilters === false &&
            props.productPage &&
            productsArray.map((product, index) => {
              return (
                product.categoryFlag &&
                product.ratingFlag &&
                product.priceFlag && (
                  <Card
                    key={index}
                    bookCover={product.bookCover}
                    bookTitle={product.bookTitle}
                    bookAuthor={product.bookAuthor}
                    bookPrice={product.bookPrice}
                    actionOne={product.actionOne}
                    actionTwo={product.actionTwo}
                    actionOneFunction={() => addToCart(product)}
                    actionTwoFunction={() => addToWishlist(product)}
                    bookQuantity={1}
                  />
                )
              );
            })}
          {sortFilters &&
            lowToHigh &&
            props.productPage &&
            lowToHighArray.map((product, index) => {
              return (
                product.categoryFlag &&
                product.ratingFlag &&
                product.priceFlag && (
                  <Card
                    key={index}
                    bookCover={product.bookCover}
                    bookTitle={product.bookTitle}
                    bookAuthor={product.bookAuthor}
                    bookPrice={product.bookPrice}
                    actionOne={product.actionOne}
                    actionTwo={product.actionTwo}
                    actionOneFunction={() => addToCart(product)}
                    actionTwoFunction={() => addToWishlist(product)}
                    bookQuantity={1}
                  />
                )
              );
            })}
          {sortFilters &&
            highToLow &&
            props.productPage &&
            highToLowArray.map((product, index) => {
              return (
                product.categoryFlag &&
                product.ratingFlag &&
                product.priceFlag && (
                  <Card
                    key={index}
                    bookCover={product.bookCover}
                    bookTitle={product.bookTitle}
                    bookAuthor={product.bookAuthor}
                    bookPrice={product.bookPrice}
                    actionOne={product.actionOne}
                    actionTwo={product.actionTwo}
                    actionOneFunction={() => addToCart(product)}
                    actionTwoFunction={() => addToWishlist(product)}
                    bookQuantity={1}
                  />
                )
              );
            })}
          {sortFilters === false &&
            props.thrillerPage &&
            productsArray
              .filter((book) => book.bookCategory === "Thriller")
              .map((product, index) => {
                return (
                  product.ratingFlag &&
                  product.priceFlag && (
                    <Card
                      key={index}
                      bookCover={product.bookCover}
                      bookTitle={product.bookTitle}
                      bookAuthor={product.bookAuthor}
                      bookPrice={product.bookPrice}
                      actionOne={product.actionOne}
                      actionTwo={product.actionTwo}
                      actionOneFunction={() => addToCart(product)}
                      actionTwoFunction={() => addToWishlist(product)}
                      bookQuantity={1}
                    />
                  )
                );
              })}
          {sortFilters &&
            lowToHigh &&
            props.thrillerPage &&
            lowToHighArray
              .filter((book) => book.bookCategory === "Thriller")
              .map((product, index) => {
                return (
                  product.ratingFlag &&
                  product.priceFlag && (
                    <Card
                      key={index}
                      bookCover={product.bookCover}
                      bookTitle={product.bookTitle}
                      bookAuthor={product.bookAuthor}
                      bookPrice={product.bookPrice}
                      actionOne={product.actionOne}
                      actionTwo={product.actionTwo}
                      actionOneFunction={() => addToCart(product)}
                      actionTwoFunction={() => addToWishlist(product)}
                      bookQuantity={1}
                    />
                  )
                );
              })}
          {sortFilters &&
            highToLow &&
            props.thrillerPage &&
            highToLowArray
              .filter((book) => book.bookCategory === "Thriller")
              .map((product, index) => {
                return (
                  product.ratingFlag &&
                  product.priceFlag && (
                    <Card
                      key={index}
                      bookCover={product.bookCover}
                      bookTitle={product.bookTitle}
                      bookAuthor={product.bookAuthor}
                      bookPrice={product.bookPrice}
                      actionOne={product.actionOne}
                      actionTwo={product.actionTwo}
                      actionOneFunction={() => addToCart(product)}
                      actionTwoFunction={() => addToWishlist(product)}
                      bookQuantity={1}
                    />
                  )
                );
              })}
          {sortFilters === false &&
            props.dramaPage &&
            productsArray
              .filter((book) => book.bookCategory === "Drama")
              .map((product, index) => {
                return (
                  product.ratingFlag &&
                  product.priceFlag && (
                    <Card
                      key={index}
                      bookCover={product.bookCover}
                      bookTitle={product.bookTitle}
                      bookAuthor={product.bookAuthor}
                      bookPrice={product.bookPrice}
                      actionOne={product.actionOne}
                      actionTwo={product.actionTwo}
                      actionOneFunction={() => addToCart(product)}
                      actionTwoFunction={() => addToWishlist(product)}
                      bookQuantity={1}
                    />
                  )
                );
              })}
          {sortFilters &&
            lowToHigh &&
            props.dramaPage &&
            lowToHighArray
              .filter((book) => book.bookCategory === "Drama")
              .map((product, index) => {
                return (
                  product.ratingFlag &&
                  product.priceFlag && (
                    <Card
                      key={index}
                      bookCover={product.bookCover}
                      bookTitle={product.bookTitle}
                      bookAuthor={product.bookAuthor}
                      bookPrice={product.bookPrice}
                      actionOne={product.actionOne}
                      actionTwo={product.actionTwo}
                      actionOneFunction={() => addToCart(product)}
                      actionTwoFunction={() => addToWishlist(product)}
                      bookQuantity={1}
                    />
                  )
                );
              })}
          {sortFilters &&
            highToLow &&
            props.dramaPage &&
            highToLowArray
              .filter((book) => book.bookCategory === "Drama")
              .map((product, index) => {
                return (
                  product.ratingFlag &&
                  product.priceFlag && (
                    <Card
                      key={index}
                      bookCover={product.bookCover}
                      bookTitle={product.bookTitle}
                      bookAuthor={product.bookAuthor}
                      bookPrice={product.bookPrice}
                      actionOne={product.actionOne}
                      actionTwo={product.actionTwo}
                      actionOneFunction={() => addToCart(product)}
                      actionTwoFunction={() => addToWishlist(product)}
                      bookQuantity={1}
                    />
                  )
                );
              })}
          {sortFilters === false &&
            props.romancePage &&
            productsArray
              .filter((book) => book.bookCategory === "Romance")
              .map((product, index) => {
                return (
                  product.ratingFlag &&
                  product.priceFlag && (
                    <Card
                      key={index}
                      bookCover={product.bookCover}
                      bookTitle={product.bookTitle}
                      bookAuthor={product.bookAuthor}
                      bookPrice={product.bookPrice}
                      actionOne={product.actionOne}
                      actionTwo={product.actionTwo}
                      actionOneFunction={() => addToCart(product)}
                      actionTwoFunction={() => addToWishlist(product)}
                      bookQuantity={1}
                    />
                  )
                );
              })}
          {sortFilters &&
            lowToHigh &&
            props.romancePage &&
            lowToHighArray
              .filter((book) => book.bookCategory === "Romance")
              .map((product, index) => {
                return (
                  product.ratingFlag &&
                  product.priceFlag && (
                    <Card
                      key={index}
                      bookCover={product.bookCover}
                      bookTitle={product.bookTitle}
                      bookAuthor={product.bookAuthor}
                      bookPrice={product.bookPrice}
                      actionOne={product.actionOne}
                      actionTwo={product.actionTwo}
                      actionOneFunction={() => addToCart(product)}
                      actionTwoFunction={() => addToWishlist(product)}
                      bookQuantity={1}
                    />
                  )
                );
              })}
          {sortFilters &&
            highToLow &&
            props.romancePage &&
            highToLowArray
              .filter((book) => book.bookCategory === "Romance")
              .map((product, index) => {
                return (
                  product.ratingFlag &&
                  product.priceFlag && (
                    <Card
                      key={index}
                      bookCover={product.bookCover}
                      bookTitle={product.bookTitle}
                      bookAuthor={product.bookAuthor}
                      bookPrice={product.bookPrice}
                      actionOne={product.actionOne}
                      actionTwo={product.actionTwo}
                      actionOneFunction={() => addToCart(product)}
                      actionTwoFunction={() => addToWishlist(product)}
                      bookQuantity={1}
                    />
                  )
                );
              })}
          {sortFilters === false &&
            props.scifiPage &&
            productsArray
              .filter((book) => book.bookCategory === "Scifi")
              .map((product, index) => {
                return (
                  product.ratingFlag &&
                  product.priceFlag && (
                    <Card
                      key={index}
                      bookCover={product.bookCover}
                      bookTitle={product.bookTitle}
                      bookAuthor={product.bookAuthor}
                      bookPrice={product.bookPrice}
                      actionOne={product.actionOne}
                      actionTwo={product.actionTwo}
                      actionOneFunction={() => addToCart(product)}
                      actionTwoFunction={() => addToWishlist(product)}
                      bookQuantity={1}
                    />
                  )
                );
              })}
          {sortFilters &&
            lowToHigh &&
            props.scifiPage &&
            lowToHighArray
              .filter((book) => book.bookCategory === "Scifi")
              .map((product, index) => {
                return (
                  product.ratingFlag &&
                  product.priceFlag && (
                    <Card
                      key={index}
                      bookCover={product.bookCover}
                      bookTitle={product.bookTitle}
                      bookAuthor={product.bookAuthor}
                      bookPrice={product.bookPrice}
                      actionOne={product.actionOne}
                      actionTwo={product.actionTwo}
                      actionOneFunction={() => addToCart(product)}
                      actionTwoFunction={() => addToWishlist(product)}
                      bookQuantity={1}
                    />
                  )
                );
              })}
          {sortFilters &&
            highToLow &&
            props.scifiPage &&
            highToLowArray
              .filter((book) => book.bookCategory === "Scifi")
              .map((product, index) => {
                return (
                  product.ratingFlag &&
                  product.priceFlag && (
                    <Card
                      key={index}
                      bookCover={product.bookCover}
                      bookTitle={product.bookTitle}
                      bookAuthor={product.bookAuthor}
                      bookPrice={product.bookPrice}
                      actionOne={product.actionOne}
                      actionTwo={product.actionTwo}
                      actionOneFunction={() => addToCart(product)}
                      actionTwoFunction={() => addToWishlist(product)}
                      bookQuantity={1}
                    />
                  )
                );
              })}
        </div>{" "}
      </div>{" "}
    </div>
  );
}

export default Products;
