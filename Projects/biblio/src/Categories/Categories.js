import "./categories.css";
import category1 from "./../Media/category-1.jpg";
import category2 from "./../Media/category-2.jpg";
import category3 from "./../Media/category-3.jpg";
import category4 from "./../Media/category-4.jpg";

function Categories() {
  return (
    <div className="Categories">
      <div className="landing-page-container categories">
        <h3>PICK YOUR CATEGORY</h3>
        <div className="landing-page-content categories">
          <div className="category-card">
            <img src={category1} alt="" />
            <p>Thriller</p>
          </div>
          <div className="category-card">
            <img src={category2} alt="" />
            <p>Drama</p>
          </div>
          <div className="category-card">
            <img src={category3} alt="" />
            <p>Sci-Fi</p>
          </div>
          <div className="category-card">
            <img src={category4} alt="" />
            <p>Romance</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Categories;
