import "./products.css";
import thrillerBookOne from "./../Media/thriller-book-1.jpg";
import Card from "../Card/Card";

function Products() {
  return (
    <div className="Products">
      <div className="landing-page-container">
        <div className="filter-section">
          <div className="filter-section-title">
            <h3>Filters</h3>
            <p>Clear</p>
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
          <div className="category-filter">
            <h3 className="filter-header">Category</h3>
            <div>
              <input
                id="thriller-category"
                className="category-checkbox"
                type="checkbox"
              />
              <label htmlFor="thriller-category">Thrillers</label>
            </div>

            <div>
              <input
                id="drama-category"
                className="category-checkbox"
                type="checkbox"
              />
              <label htmlFor="drama-category">Drama</label>
            </div>

            <div>
              <input
                id="scifi-category"
                className="category-checkbox"
                type="checkbox"
              />
              <label htmlFor="scifi-category">Sci-Fi</label>
            </div>

            <div>
              <input
                id="romance-category"
                className="category-checkbox"
                type="checkbox"
              />
              <label htmlFor="romance-category">Romance</label>
            </div>
          </div>
          <div className="rating-filter">
            <h3 className="filter-header">Rating</h3>
            <div>
              <input type="radio" id="radio-1" name="rating-input" />
              <label htmlFor="radio-1">4 Stars & above</label>
            </div>

            <div>
              <input type="radio" id="radio-2" name="rating-input" />
              <label htmlFor="radio-2">3 Stars & above</label>
            </div>

            <div>
              <input type="radio" id="radio-3" name="rating-input" />
              <label htmlFor="radio-3">2 Stars & above</label>
            </div>
          </div>
          <div className="sort-filter">
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
        </div>
      </div>
    </div>
  );
}

export default Products;
