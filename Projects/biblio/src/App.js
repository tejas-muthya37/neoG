import "./App.css";
import Navbar from "./Navbar/Navbar";
// import Authenticate from "./Authenticate/Authenticate";
import Cart from "./Cart/Cart";
import Wishlist from "./Wishlist/Wishlist";
import Products from "./Products/Products";
import Categories from "./Categories/Categories";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Navbar />
            <Categories />
          </Route>

          <Route exact path="/books">
            <Navbar />
            <Products productPage={true} />
          </Route>

          <Route exact path="/books/thrillers">
            <Navbar />
            <Products thrillerPage={true} />
          </Route>

          <Route exact path="/books/drama">
            <Navbar />
            <Products dramaPage={true} />
          </Route>

          <Route exact path="/books/sci-fi">
            <Navbar />
            <Products scifiPage={true} />
          </Route>

          <Route exact path="/books/romance">
            <Navbar />
            <Products romancePage={true} />
          </Route>

          <Route exact path="/cart">
            <Navbar />
            <Cart />
          </Route>

          <Route exact path="/wishlist">
            <Navbar />
            <Wishlist />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

/* <Authenticate
        cardTitle="Login"
        checkboxLabel="Remember Me"
        alternate="Create A New Account"
      /> */

/* <Authenticate
        cardTitle="Sign Up"
        checkboxLabel="I accept the terms & conditions"
        alternate="Login With Existing Account"
      /> */

/* <Card
        bookCover={thrillerBookOne}
        bookTitle="Murder On The Orient Express"
        bookAuthor="Agatha Christie"
        bookPrice={499}
        actionOne="Add To Cart"
        actionTwo="Add To Wishlist"
        cartPage={true}
        bookQuantity={1}
      /> */
