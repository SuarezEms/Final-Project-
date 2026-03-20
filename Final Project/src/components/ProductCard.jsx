import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";

export default function ProductCard({ product }) {
  const { addToCart } = useCart();
  const { isInWishlist, toggleWishlist } = useWishlist();

  return (
    <article className="card product-card">
      <button
        className={`wishlist-btn ${isInWishlist(product.id) ? "active" : ""}`}
        onClick={() => toggleWishlist(product)}
      >
        {isInWishlist(product.id) ? "♥" : "♡"}
      </button>

      <img
        src={product.image}
        alt={product.name}
        className="product-image"
      />

      <div className="card-body">
        <p className="category">{product.category}</p>
        <h3>{product.name}</h3>
        <p className="description">{product.description}</p>

        <div className="product-footer">
          <strong>₱{product.price.toFixed(2)}</strong>
          <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
      </div>
    </article>
  );
}