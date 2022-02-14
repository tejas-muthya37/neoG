import "./products.css";
import thrillerBookOne from "./../Media/thriller-book-1.jpg";
import Card from "../Card/Card";
import { useState } from "react";

function Products() {
  const [categoryFilters, setCategoryFilters] = useState(false);
  const [thrillerCategory, setThrillerCategory] = useState(true);
  const [romanceCategory, setRomanceCategory] = useState(true);
  const [dramaCategory, setDramaCategory] = useState(true);
  const [scifiCategory, setScifiCategory] = useState(true);
  const [ratingFilters, setRatingFilters] = useState(false);
  const [rating4AndAbove, setRating4AndAbove] = useState(true);
  const [rating3AndAbove, setRating3AndAbove] = useState(true);
  const [rating2AndAbove, setRating2AndAbove] = useState(true);

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
    }
    setRating2AndAbove(false);
    setRating3AndAbove(false);
    setRating4AndAbove(false);
    if (event.target.id === "rating-4-stars-and-above") {
      setRating4AndAbove(true);
    }
    if (event.target.id === "rating-3-stars-and-above") {
      setRating3AndAbove(true);
    }
    if (event.target.id === "rating-2-stars-and-above") {
      setRating2AndAbove(true);
    }
  };

  const clearFilters = () => {
    window.location.reload();
  };

  return (
    <div className="Products">
      <div className="landing-page-container">
        <div className="filter-section">
          <div className="filter-section-title">
            <h3>Filters</h3>
            <p onClick={clearFilters}>Clear</p>
          </div>
          <div className="price-filter">
            <h3 className="filter-header">Price</h3>
            <input type="range" min="199" max="499" step="100" />
            <p>
              <span>149</span>
              <span>249</span>
              <span>349</span>
              <span>449</span>
            </p>
          </div>
          <div className="category-filter input-filter">
            <h3 className="filter-header">Category</h3>
            <div>
              <input
                id="thriller-category"
                className="category-checkbox"
                type="checkbox"
                onClick={applyCategoryFilters}
              />
              <label htmlFor="thriller-category">Thrillers</label>
            </div>

            <div>
              <input
                id="drama-category"
                className="category-checkbox"
                type="checkbox"
                onClick={applyCategoryFilters}
              />
              <label htmlFor="drama-category">Drama</label>
            </div>

            <div>
              <input
                id="scifi-category"
                className="category-checkbox"
                type="checkbox"
                onClick={applyCategoryFilters}
              />
              <label htmlFor="scifi-category">Sci-Fi</label>
            </div>

            <div>
              <input
                id="romance-category"
                className="category-checkbox"
                type="checkbox"
                onClick={applyCategoryFilters}
              />
              <label htmlFor="romance-category">Romance</label>
            </div>
          </div>
          <div className="rating-filter input-filter">
            <h3 className="filter-header">Rating</h3>
            <div>
              <input
                type="radio"
                id="rating-4-stars-and-above"
                name="rating-input"
                onClick={applyRatingFilters}
              />
              <label htmlFor="radio-1">4 Stars & above</label>
            </div>

            <div>
              <input
                type="radio"
                id="rating-3-stars-and-above"
                name="rating-input"
                onClick={applyRatingFilters}
              />
              <label htmlFor="radio-2">3 Stars & above</label>
            </div>

            <div>
              <input
                type="radio"
                id="rating-2-stars-and-above"
                name="rating-input"
                onClick={applyRatingFilters}
              />
              <label htmlFor="radio-3">2 Stars & above</label>
            </div>
          </div>
          <div className="sort-filter input-filter">
            <h3 className="filter-header">Sort by</h3>
            <div>
              <input type="radio" id="radio-5" name="sort-input" />
              <label htmlFor="radio-5">Low to High</label>
            </div>

            <div>
              <input type="radio" id="radio-6" name="sort-input" />
              <label htmlFor="radio-6">High to Low</label>
            </div>
          </div>
        </div>
        <div className="landing-page-content">
          {thrillerCategory === true && rating4AndAbove === true && (
            <Card
              bookCover={thrillerBookOne}
              bookTitle="Murder On The Orient Express"
              bookAuthor="Agatha Christie"
              bookPrice={199}
              actionOne="Add To Cart"
              actionTwo="Remove From Wishlist"
              cartPage={true}
              bookQuantity={1}
            />
          )}

          {romanceCategory === true && rating3AndAbove === true && (
            <Card
              bookCover={thrillerBookOne}
              bookTitle="Murder On The Orient Express"
              bookAuthor="Agatha Christie"
              bookPrice={299}
              actionOne="Add To Cart"
              actionTwo="Remove From Wishlist"
              cartPage={true}
              bookQuantity={1}
            />
          )}

          {dramaCategory === true && rating2AndAbove === true && (
            <Card
              bookCover={thrillerBookOne}
              bookTitle="Murder On The Orient Express"
              bookAuthor="Agatha Christie"
              bookPrice={399}
              actionOne="Add To Cart"
              actionTwo="Remove From Wishlist"
              cartPage={true}
              bookQuantity={1}
            />
          )}

          {scifiCategory === true && (
            <Card
              bookCover={thrillerBookOne}
              bookTitle="Murder On The Orient Express"
              bookAuthor="Agatha Christie"
              bookPrice={499}
              actionOne="Add To Cart"
              actionTwo="Remove From Wishlist"
              cartPage={true}
              bookQuantity={1}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default Products;
