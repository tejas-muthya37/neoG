import "./wishlist.css";
import thrillerBookOne from "./../Media/thriller-book-1.jpg";
import Card from "../Card/Card";

function Wishlist() {
  return (
    <div className="Wishlist">
      <h1 className="wishlist-title">MY WISHLIST</h1>
      <div className="landing-page-container wishlist">
        <Card
          bookCover={thrillerBookOne}
          bookTitle="Murder On The Orient Express"
          bookAuthor="Agatha Christie"
          bookPrice={499}
          actionOne="Add To Cart"
          actionTwo="Remove From Wishlist"
        />

        <Card
          bookCover={thrillerBookOne}
          bookTitle="Murder On The Orient Express"
          bookAuthor="Agatha Christie"
          bookPrice={499}
          actionOne="Add To Cart"
          actionTwo="Remove From Wishlist"
        />

        <Card
          bookCover={thrillerBookOne}
          bookTitle="Murder On The Orient Express"
          bookAuthor="Agatha Christie"
          bookPrice={499}
          actionOne="Add To Cart"
          actionTwo="Remove From Wishlist"
        />

        <Card
          bookCover={thrillerBookOne}
          bookTitle="Murder On The Orient Express"
          bookAuthor="Agatha Christie"
          bookPrice={499}
          actionOne="Add To Cart"
          actionTwo="Remove From Wishlist"
        />
      </div>
    </div>
  );
}

export default Wishlist;
