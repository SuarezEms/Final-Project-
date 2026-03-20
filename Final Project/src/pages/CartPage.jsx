import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function CartPage() {
  const { cart, subtotal, tax, total, updateQuantity, removeFromCart } = useCart();

  if (cart.length === 0) {
    return (
      <section className="empty-state card">
        <h2>Your cart is empty</h2>
        <p>Add products from the catalog to continue shopping.</p>
        <Link className="button-link" to="/">
          Back to Products
        </Link>
      </section>
    );
  }

  return (
    <section className="cart-layout">
      <div className="card">
        <h2>Shopping Cart</h2>
        <div className="cart-list">
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <div>
                <h3>{item.name}</h3>
                <p>₱{item.price.toFixed(2)} each</p>
              </div>

              <div className="qty-controls">
                <button onClick={() => updateQuantity(item.id, -1)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => updateQuantity(item.id, 1)}>+</button>
              </div>

              <strong>₱{(item.price * item.quantity).toFixed(2)}</strong>

              <button
                className="danger-link"
                onClick={() => removeFromCart(item.id)}
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      </div>

      <aside className="card summary-card">
        <h2>Order Summary</h2>
        <div className="summary-row">
          <span>Subtotal</span>
          <strong>₱{subtotal.toFixed(2)}</strong>
        </div>
        <div className="summary-row">
          <span>Tax (12%)</span>
          <strong>₱{tax.toFixed(2)}</strong>
        </div>
        <div className="summary-row total-row">
          <span>Total</span>
          <strong>₱{total.toFixed(2)}</strong>
        </div>
        <Link className="button-link" to="/checkout">
          Proceed to Checkout
        </Link>
      </aside>
    </section>
  );
}