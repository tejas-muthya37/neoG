import "./products.css";
import Card from "../Card/Card";
import { useEffect, useState } from "react";
import { useProducts } from "./../products-context";
import {
  thrillerBookOne,
  thrillerBookTwo,
  thrillerBookThree,
  thrillerBookFour,
  romanceBookOne,
  romanceBookTwo,
  romanceBookThree,
  romanceBookFour,
  dramaBookOne,
  dramaBookTwo,
  dramaBookThree,
  dramaBookFour,
  scifiBookOne,
  scifiBookTwo,
  scifiBookThree,
  scifiBookFour,
} from "./../images.js";

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

  const productsArray = [
    {
      id: 1,
      bookCover: thrillerBookOne,
      bookTitle: "Murder On The Orient Express",
      bookAuthor: "Agatha Christie",
      bookPrice: 149,
      priceFlag: priceBelow150,
      actionOne: "Add To Cart",
      actionTwo: "Add To Wishlist",
      categoryFlag: thrillerCategory,
      bookCategory: "Thriller",
      bookRating: rating4AndAbove,
      bookQuantity: 1,
    },
    {
      id: 2,
      bookCover: thrillerBookTwo,
      bookTitle: "400 Days",
      bookAuthor: "Chetan Bhagat",
      bookPrice: 249,
      priceFlag: priceBelow250,
      actionOne: "Add To Cart",
      actionTwo: "Add To Wishlist",
      categoryFlag: thrillerCategory,
      bookCategory: "Thriller",
      bookRating: rating3AndAbove,
      bookQuantity: 1,
    },
    {
      id: 3,
      bookCover: thrillerBookThree,
      bookTitle: "The Murder of Roger Ackroyd",
      bookAuthor: "Agatha Christie",
      bookPrice: 449,
      priceFlag: priceBelow450,
      actionOne: "Add To Cart",
      actionTwo: "Add To Wishlist",
      categoryFlag: thrillerCategory,
      bookCategory: "Thriller",
      bookRating: rating2AndAbove,
      bookQuantity: 1,
    },
    {
      id: 4,
      bookCover: thrillerBookFour,
      bookTitle: "One Arranged Murder",
      bookAuthor: "Chetan Bhagat",
      bookPrice: 299,
      priceFlag: priceBelow350,
      actionOne: "Add To Cart",
      actionTwo: "Add To Wishlist",
      categoryFlag: thrillerCategory,
      bookCategory: "Thriller",
      bookRating: rating4AndAbove,
      bookQuantity: 1,
    },
    {
      id: 5,
      bookCover: dramaBookOne,
      bookTitle: "The Legend of Suheldev",
      bookAuthor: "Amish Tripathi",
      bookPrice: 449,
      priceFlag: priceBelow450,
      actionOne: "Add To Cart",
      actionTwo: "Add To Wishlist",
      categoryFlag: dramaCategory,
      bookCategory: "Drama",
      bookRating: rating4AndAbove,
      bookQuantity: 1,
    },
    {
      id: 6,
      bookCover: dramaBookTwo,
      bookTitle: "Five Point Someone",
      bookAuthor: "Chetan Bhagat",
      bookPrice: 149,
      priceFlag: priceBelow150,
      actionOne: "Add To Cart",
      actionTwo: "Add To Wishlist",
      categoryFlag: dramaCategory,
      bookCategory: "Drama",
      bookRating: rating3AndAbove,
      bookQuantity: 1,
    },
    {
      id: 7,
      bookCover: dramaBookThree,
      bookTitle: "The 3 Mistakes Of My Life",
      bookAuthor: "Chetan Bhagat",
      bookPrice: 299,
      priceFlag: priceBelow350,
      actionOne: "Add To Cart",
      actionTwo: "Add To Wishlist",
      categoryFlag: dramaCategory,
      bookCategory: "Drama",
      bookRating: rating2AndAbove,
      bookQuantity: 1,
    },
    {
      id: 8,
      bookCover: dramaBookFour,
      bookTitle: "The White Tiger",
      bookAuthor: "Aravind Adiga",
      bookPrice: 249,
      priceFlag: priceBelow250,
      actionOne: "Add To Cart",
      actionTwo: "Add To Wishlist",
      categoryFlag: dramaCategory,
      bookCategory: "Drama",
      bookRating: rating4AndAbove,
      bookQuantity: 1,
    },
    {
      id: 9,
      bookCover: scifiBookOne,
      bookTitle: "Foundation And Empire",
      bookAuthor: "Isaac Asimov",
      bookPrice: 199,
      priceFlag: priceBelow250,
      actionOne: "Add To Cart",
      actionTwo: "Add To Wishlist",
      categoryFlag: scifiCategory,
      bookCategory: "Scifi",
      bookRating: rating4AndAbove,
      bookQuantity: 1,
    },
    {
      id: 10,
      bookCover: scifiBookTwo,
      bookTitle: "Beyond Infinity",
      bookAuthor: "Akash Siddharth",
      bookPrice: 149,
      priceFlag: priceBelow150,
      actionOne: "Add To Cart",
      actionTwo: "Add To Wishlist",
      categoryFlag: scifiCategory,
      bookCategory: "Scifi",
      bookRating: rating3AndAbove,
      bookQuantity: 1,
    },
    {
      id: 11,
      bookCover: scifiBookThree,
      bookTitle: "Artemis",
      bookAuthor: "Andy Weir",
      bookPrice: 449,
      priceFlag: priceBelow450,
      actionOne: "Add To Cart",
      actionTwo: "Add To Wishlist",
      categoryFlag: scifiCategory,
      bookCategory: "Scifi",
      bookRating: rating2AndAbove,
      bookQuantity: 1,
    },
    {
      id: 12,
      bookCover: scifiBookFour,
      bookTitle: "Dark Matter",
      bookAuthor: "Blake Crouch",
      bookPrice: 299,
      priceFlag: priceBelow350,
      actionOne: "Add To Cart",
      actionTwo: "Add To Wishlist",
      categoryFlag: scifiCategory,
      bookCategory: "Scifi",
      bookRating: rating4AndAbove,
      bookQuantity: 1,
    },
    {
      id: 13,
      bookCover: romanceBookOne,
      bookTitle: "Half Girlfriend",
      bookAuthor: "Chetan Bhagat",
      bookPrice: 349,
      priceFlag: priceBelow350,
      actionOne: "Add To Cart",
      actionTwo: "Add To Wishlist",
      categoryFlag: romanceCategory,
      bookCategory: "Romance",
      bookRating: rating4AndAbove,
      bookQuantity: 1,
    },
    {
      id: 14,
      bookCover: romanceBookTwo,
      bookTitle: "2 States",
      bookAuthor: "Chetan Bhagat",
      bookPrice: 149,
      priceFlag: priceBelow150,
      actionOne: "Add To Cart",
      actionTwo: "Add To Wishlist",
      categoryFlag: romanceCategory,
      bookCategory: "Romance",
      bookRating: rating3AndAbove,
      bookQuantity: 1,
    },
    {
      id: 15,
      bookCover: romanceBookThree,
      bookTitle: "Revolution 2020",
      bookAuthor: "Chetan Bhagat",
      bookPrice: 449,
      priceFlag: priceBelow450,
      actionOne: "Add To Cart",
      actionTwo: "Add To Wishlist",
      categoryFlag: romanceCategory,
      bookCategory: "Romance",
      bookRating: rating2AndAbove,
      bookQuantity: 1,
    },
    {
      id: 16,
      bookCover: romanceBookFour,
      bookTitle: "One Indian Girl",
      bookAuthor: "Chetan Bhagat",
      bookPrice: 199,
      priceFlag: priceBelow250,
      actionOne: "Add To Cart",
      actionTwo: "Add To Wishlist",
      categoryFlag: romanceCategory,
      bookCategory: "Romance",
      bookRating: rating4AndAbove,
      bookQuantity: 1,
    },
  ];

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
    if (wishlistFlag === false) setWishlistArray([...wishlistArray, product]);
  };

  useEffect(() => {
    localStorage.setItem("CART_ARRAY", JSON.stringify(cartArray));
    localStorage.setItem("WISHLIST_ARRAY", JSON.stringify(wishlistArray));
  }, [cartArray, wishlistArray]);

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
      setPriceBelow250(false);
      setPriceBelow350(false);
      setPriceBelow450(false);
    } else if (event.target.value === "250") {
      setPriceBelow150(true);
      setPriceBelow250(true);
      setPriceBelow350(false);
      setPriceBelow450(false);
    } else if (event.target.value === "350") {
      setPriceBelow150(true);
      setPriceBelow250(true);
      setPriceBelow350(true);
      setPriceBelow450(false);
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
                product.bookRating &&
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
                product.bookRating &&
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
                product.bookRating &&
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
                  product.bookRating &&
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
                  product.bookRating &&
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
                  product.bookRating &&
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
                  product.bookRating &&
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
                  product.bookRating &&
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
                  product.bookRating &&
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
                  product.bookRating &&
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
                  product.bookRating &&
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
                  product.bookRating &&
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
                  product.bookRating &&
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
                  product.bookRating &&
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
                  product.bookRating &&
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
