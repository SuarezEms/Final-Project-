import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import products from "../data/products";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("default");

  const categories = ["All", ...new Set(products.map((product) => product.category))];

  const displayedProducts = useMemo(() => {
    let filtered = [...products];

    if (searchTerm.trim()) {
      filtered = filtered.filter((product) =>
        `${product.name} ${product.description} ${product.category}`
          .toLowerCase()
          .includes(searchTerm.toLowerCase())
      );
    }

    if (selectedCategory !== "All") {
      filtered = filtered.filter(
        (product) => product.category === selectedCategory
      );
    }

    if (sortBy === "price-low-high") {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sortBy === "price-high-low") {
      filtered.sort((a, b) => b.price - a.price);
    } else if (sortBy === "name-a-z") {
      filtered.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === "name-z-a") {
      filtered.sort((a, b) => b.name.localeCompare(a.name));
    }

    return filtered;
  }, [searchTerm, selectedCategory, sortBy]);

  return (
    <div className="home-page">
      <section className="hero">
        <div className="hero-overlay">
          <div className="hero-content">
            <span className="hero-tag">New Collection 2025</span>
            <h1>Shop Smart. Look Great. Live Better.</h1>
            <p>
              Discover trendy and affordable products carefully selected for
              your lifestyle. Quality shopping made simple with Ems Shop.
            </p>

            <div className="hero-actions">
              <a href="#products" className="btn-primary">
                Shop Now
              </a>
              <Link to="/about" className="btn-secondary">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="products" className="section featured-wrapper">
        <div className="section-header">
          <h2>Featured Products</h2>
          <p>Search, filter, sort, and save your favorite products.</p>
        </div>

        <div className="toolbar card">
          <input
            type="text"
            placeholder="Search products..."
            className="toolbar-input"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />

          <select
            className="toolbar-select"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>

          <select
            className="toolbar-select"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="default">Sort By</option>
            <option value="price-low-high">Price: Low to High</option>
            <option value="price-high-low">Price: High to Low</option>
            <option value="name-a-z">Name: A to Z</option>
            <option value="name-z-a">Name: Z to A</option>
          </select>
        </div>

        {displayedProducts.length === 0 ? (
          <div className="empty-state card">
            <h3>No products found</h3>
            <p>Try changing your search, filter, or sorting options.</p>
          </div>
        ) : (
          <div className="products-grid">
            {displayedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </section>

      <section className="store-highlights">
        <div className="highlight-card">
          <h3>Fast Delivery</h3>
          <p>
            We make sure your orders arrive quickly and safely at your doorstep.
          </p>
        </div>

        <div className="highlight-card">
          <h3>Affordable Prices</h3>
          <p>
            Enjoy budget-friendly deals without sacrificing product quality.
          </p>
        </div>

        <div className="highlight-card">
          <h3>Trusted Quality</h3>
          <p>
            Every product is selected with care to give you the best shopping
            experience.
          </p>
        </div>
      </section>
    </div>
  );
}