import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const initialForm = {
  name: "",
  address: "",
  email: "",
  phone: "",
  payment: "Cash on Delivery",
};

export default function CheckoutPage() {
  const { cart, subtotal, tax, total, clearCart } = useCart();
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const isCartEmpty = cart.length === 0;

  const orderItems = useMemo(
    () => cart.map((item) => ({ ...item, lineTotal: item.price * item.quantity })),
    [cart]
  );

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = "Full name is required.";
    if (!form.address.trim()) newErrors.address = "Address is required.";
    if (!form.email.trim()) newErrors.email = "Email is required.";
    if (!form.phone.trim()) newErrors.phone = "Phone is required.";
    return newErrors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setSubmitted(true);
    clearCart();
    setForm(initialForm);
  };

  if (submitted) {
    return (
      <section className="card success-card">
        <h2>Order placed successfully</h2>
        <p>
          Thank you for your purchase. Your cart has been cleared and your order
          is being processed.
        </p>
        <Link className="button-link" to="/">
          Continue Shopping
        </Link>
      </section>
    );
  }

  if (isCartEmpty) {
    return (
      <section className="empty-state card">
        <h2>No items ready for checkout</h2>
        <p>Add products to the cart before proceeding to checkout.</p>
        <Link className="button-link" to="/">
          View Products
        </Link>
      </section>
    );
  }

  return (
    <section className="checkout-layout">
      <form className="card checkout-form" onSubmit={handleSubmit}>
        <h2>Checkout</h2>

        <label>
          Full Name
          <input name="name" value={form.name} onChange={handleChange} />
          {errors.name && <span className="error-text">{errors.name}</span>}
        </label>

        <label>
          Address
          <textarea
            name="address"
            rows="4"
            value={form.address}
            onChange={handleChange}
          />
          {errors.address && <span className="error-text">{errors.address}</span>}
        </label>

        <label>
          Email
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
          />
          {errors.email && <span className="error-text">{errors.email}</span>}
        </label>

        <label>
          Phone
          <input name="phone" value={form.phone} onChange={handleChange} />
          {errors.phone && <span className="error-text">{errors.phone}</span>}
        </label>

        <label>
          Payment Method
          <select name="payment" value={form.payment} onChange={handleChange}>
            <option>Cash on Delivery</option>
            <option>Credit Card</option>
            <option>GCash</option>
            <option>Bank Transfer</option>
          </select>
        </label>

        <button type="submit">Place Order</button>
      </form>

      <aside className="card summary-card">
        <h2>Order Summary</h2>
        <div className="checkout-items">
          {orderItems.map((item) => (
            <div className="summary-row" key={item.id}>
              <span>
                {item.name} x {item.quantity}
              </span>
              <strong>₱{item.lineTotal.toFixed(2)}</strong>
            </div>
          ))}
        </div>

        <div className="summary-row">
          <span>Subtotal</span>
          <strong>₱{subtotal.toFixed(2)}</strong>
        </div>
        <div className="summary-row">
          <span>Tax (12%)</span>
          <strong>₱{tax.toFixed(2)}</strong>
        </div>
        <div className="summary-row total-row">
          <span>Grand Total</span>
          <strong>₱{total.toFixed(2)}</strong>
        </div>
      </aside>
    </section>
  );
}