import "./navbar.css";

// import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
// import FavoriteIcon from "@mui/icons-material/Favorite";

function Navbar() {
  function handleClick() {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-items");
    const items = document.querySelectorAll(".nav-items li");
    nav.classList.toggle("navSlide");

    items.forEach((item, index) => {
      if (item.style.animation) {
        item.style.animation = "";
      } else {
        item.style.animation = `navLinkFade 0.3s ease forwards ${index / 7}s`;
      }
    });

    burger.classList.toggle("toggle");
  }

  return (
    <div className="Navbar">
      <nav className="navbar">
        <div className="logo">
          <a href="/">biblio</a>
        </div>

        <div className="nav-items">
          <li>
            <button>Login</button>
          </li>
          <li>
            <div className="nav-cart-mobile">
              <div>
                <a href="/">My Cart</a>
              </div>
              <span>
                (<span className="nav-count">2</span>)
              </span>
            </div>
            <div className="nav-cart">
              <div>
                <a href="/">
                  <i className="fas fa-heart fa-lg"></i>
                </a>
              </div>
              <span className="nav-count">2</span>
            </div>
          </li>

          <li>
            <div className="nav-wishlist-mobile">
              <div>
                <a href="/">My Wishlist</a>
              </div>
              <span>
                (<span className="nav-count">2</span>)
              </span>
            </div>
            <div className="nav-wishlist">
              <div>
                <a href="/">
                  <i className="fas fa-shopping-cart fa-lg"></i>
                </a>
              </div>
              <span className="nav-count">2</span>
            </div>
          </li>
          <li>
            <input type="text" placeholder="Search" />
          </li>
        </div>

        <div onClick={() => handleClick()} id="burger" className="burger">
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
