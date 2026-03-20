import { Link } from "react-router-dom";

const blogPosts = [
  {
    id: 1,
    tag: "New Arrival",
    title: "Fresh styles just dropped at Ems Shop",
    excerpt:
      "Discover our latest collection of jackets, jeans, hoodies, shoes, and accessories designed for everyday comfort and style.",
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=900&q=60",
    href: "/",
  },
  {
    id: 2,
    tag: "Style Guide",
    title: "How to match jackets, jeans, and sneakers",
    excerpt:
      "Build a clean and stylish outfit by pairing denim jackets, fitted jeans, and simple sneakers for an effortless everyday look.",
    image:
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=900&q=60",
    href: "/",
  },
  {
    id: 3,
    tag: "Popular Picks",
    title: "Customer favorites this week",
    excerpt:
      "Our most loved items this week include casual hoodies, smart watches, trendy sunglasses, and classic white sneakers.",
    image:
      "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&w=900&q=60",
    href: "/",
  },
  {
    id: 4,
    tag: "Shopping Tips",
    title: "Why Ems Shop is perfect for everyday fashion",
    excerpt:
      "We focus on affordable prices, stylish essentials, and easy shopping so you can upgrade your wardrobe without overspending.",
    image:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=900&q=60",
    href: "/about",
  },
];

export default function BlogPage() {
  return (
    <section className="section">
      <div className="page-header card">
        <h1>Blogs</h1>
        <p>Style updates, shopping tips, and featured collections from Ems Shop.</p>
      </div>

      <div className="content-grid">
        <div>
          {blogPosts.map((post) => (
            <article className="blog-card card" key={post.id}>
              <img className="blog-card-img" src={post.image} alt={post.title} />
              <div className="card-body">
                <small className="blog-tag">{post.tag}</small>
                <h2 className="blog-card-title">{post.title}</h2>
                <p className="blog-card-excerpt">{post.excerpt}</p>
                <Link className="button-link small-button" to={post.href}>
                  Explore
                </Link>
              </div>
            </article>
          ))}
        </div>

        <aside>
          <div className="card mb-card">
            <div className="card-body">
              <h3>Shop Categories</h3>
              <div className="aside-actions">
                <Link className="button-link ghost-button" to="/">
                  New Arrivals
                </Link>
                <Link className="button-link ghost-button" to="/">
                  Clothing
                </Link>
                <Link className="button-link ghost-button" to="/">
                  Shoes
                </Link>
                <Link className="button-link ghost-button" to="/">
                  Jewelry
                </Link>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-body">
              <h3>Trending Topics</h3>
              <div className="topic-list">
                <span>Jackets</span>
                <span>Jeans</span>
                <span>Sneakers</span>
                <span>Accessories</span>
                <span>Style Tips</span>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}