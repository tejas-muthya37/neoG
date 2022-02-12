import "./App.css";
import Navbar from "./Navbar/Navbar";
// import Authenticate from "./Authenticate/Authenticate";
import Cart from "./Cart/Cart";
import Wishlist from "./Wishlist/Wishlist";
import Products from "./Products/Products";
import Categories from "./Categories/Categories";

function App() {
  return (
    <div className="App">
      {/* <Authenticate
        cardTitle="Login"
        checkboxLabel="Remember Me"
        alternate="Create A New Account"
      /> */}
      {/* <Authenticate
        cardTitle="Sign Up"
        checkboxLabel="I accept the terms & conditions"
        alternate="Login With Existing Account"
      /> */}
      {/* <Card
        bookCover={thrillerBookOne}
        bookTitle="Murder On The Orient Express"
        bookAuthor="Agatha Christie"
        bookPrice={499}
        actionOne="Add To Cart"
        actionTwo="Add To Wishlist"
        cartPage={true}
        bookQuantity={1}
      /> */}
      <Navbar />
      {/* <Cart /> */}
      {/* <Wishlist /> */}
      {/* <Products /> */}
      <Categories />
    </div>
  );
}

export default App;
