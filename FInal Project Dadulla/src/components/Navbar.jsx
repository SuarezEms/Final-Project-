import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";
import { useTheme } from "../context/ThemeContext";

export default function Navbar() {
  const { cart } = useCart();
  const { wishlist } = useWishlist();
  const { darkMode, toggleDarkMode } = useTheme();

  return (
    <header className="navbar">
      <div className="nav-brand">
        <span className="brand-logo">ES</span>
        <div>
          <h2>Ems Shop</h2>
          <p>Your everyday style store</p>
        </div>
      </div>

      <nav className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/wishlist" className="wishlist-link">
          Wishlist <span className="cart-badge">{wishlist.length}</span>
        </Link>
        <Link to="/cart" className="cart-link">
          Cart <span className="cart-badge">{cart.length}</span>
        </Link>
        <button className="theme-toggle" onClick={toggleDarkMode}>
          {darkMode ? "Light" : "Dark"}
        </button>
      </nav>
    </header>
  );
}