import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { useWishlist } from "../context/WishlistContext";

export default function WishlistPage() {
  const { wishlist } = useWishlist();

  if (wishlist.length === 0) {
    return (
      <section className="empty-state card">
        <h2>Your wishlist is empty</h2>
        <p>Save your favorite items so you can come back to them later.</p>
        <Link className="button-link" to="/">
          Browse Products
        </Link>
      </section>
    );
  }

  return (
    <section className="section">
      <div className="section-header">
        <h2>My Wishlist</h2>
        <p>Your saved products in one place.</p>
      </div>

      <div className="products-grid">
        {wishlist.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}