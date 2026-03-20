const products = [
  {
    id: 1,
    name: "Classic White Sneakers",
    category: "Shoes",
    description: "Comfortable and stylish sneakers for everyday wear.",
    price: 1499,
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    name: "Minimalist Backpack",
    category: "Accessories",
    description: "A sleek backpack perfect for school, work, or travel.",
    price: 1299,
    image:
      "https://images.unsplash.com/photo-1581605405669-fcdf81165afa?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    name: "Gold Pendant Necklace",
    category: "Jewelry",
    description: "Elegant necklace with a clean and modern pendant design.",
    price: 2199,
    image:
      "https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    name: "Smart Watch",
    category: "Gadgets",
    description: "Track your fitness and notifications with modern style.",
    price: 2599,
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 5,
    name: "Casual Hoodie",
    category: "Clothing",
    description: "Soft, warm, and perfect for your everyday casual look.",
    price: 999,
    image:
      "https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/B92889s.jpg?im=Resize,width=750",
  },
  {
    id: 6,
    name: "Modern Sunglasses",
    category: "Accessories",
    description: "Stylish eyewear designed for comfort and confidence.",
    price: 799,
    image:
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 7,
    name: "Denim Jacket",
    category: "Clothing",
    description: "A timeless denim jacket that matches casual and streetwear outfits.",
    price: 1799,
    image:
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 8,
    name: "Black Bomber Jacket",
    category: "Clothing",
    description: "Lightweight bomber jacket with a clean and modern fit.",
    price: 1899,
    image:
      "https://images.unsplash.com/photo-1523398002811-999ca8dec234?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 9,
    name: "Oversized Hoodie",
    category: "Clothing",
    description: "Relaxed-fit hoodie designed for comfort and a trendy layered look.",
    price: 1199,
    image:
      "https://images.unsplash.com/photo-1503341504253-dff4815485f1?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 10,
    name: "Slim Fit Jeans",
    category: "Clothing",
    description: "Classic slim-fit jeans for a clean everyday outfit.",
    price: 1399,
    image:
      "https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 11,
    name: "Ripped Denim Jeans",
    category: "Clothing",
    description: "Trendy ripped jeans for a bold and casual streetwear style.",
    price: 1499,
    image:
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 12,
    name: "Cargo Pants",
    category: "Clothing",
    description: "Functional and stylish cargo pants with multiple pockets.",
    price: 1299,
    image:
      "https://images.unsplash.com/photo-1552902865-b72c031ac5ea?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 13,
    name: "Basic White T-Shirt",
    category: "Clothing",
    description: "A soft basic tee that works well with jeans, jackets, or shorts.",
    price: 499,
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 14,
    name: "Flannel Polo",
    category: "Clothing",
    description: "A warm flannel top with a classic check pattern.",
    price: 899,
    image:
      "https://images.unsplash.com/photo-1603252109303-2751441dd157?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 15,
    name: "Leather Jacket",
    category: "Clothing",
    description: "A bold leather jacket for a sharp and confident style.",
    price: 2499,
    image:
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 16,
    name: "Wide Leg Jeans",
    category: "Clothing",
    description: "Comfortable wide-leg jeans with a relaxed modern silhouette.",
    price: 1599,
    image:
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 17,
    name: "Puffer Jacket",
    category: "Clothing",
    description: "A warm padded jacket ideal for colder weather and layered outfits.",
    price: 2299,
    image:
      "https://images.unsplash.com/photo-1548883354-94bcfe321cbb?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 18,
    name: "Khaki Shorts",
    category: "Clothing",
    description: "Simple and versatile shorts for a relaxed everyday look.",
    price: 699,
    image:
      "https://www.schoffelcountry.com/cdn/shop/files/SCH_SUM25_PDP_2000x2400_33.jpg?v=1745505256&width=2667",
  },
  {
    id: 19,
    name: "Running Trainers",
    category: "Shoes",
    description: "Lightweight running shoes built for comfort and performance.",
    price: 1899,
    image:
      "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 20,
    name: "High Top Sneakers",
    category: "Shoes",
    description: "Stylish high tops for a bold casual streetwear outfit.",
    price: 1699,
    image:
      "https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 21,
    name: "Leather Loafers",
    category: "Shoes",
    description: "Smart casual loafers with a clean polished finish.",
    price: 1999,
    image:
      "https://images.unsplash.com/photo-1614252369475-531eba835eb1?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 22,
    name: "Pearl Bracelet",
    category: "Jewelry",
    description: "A simple and elegant bracelet that adds a refined touch.",
    price: 999,
    image:
      "https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 23,
    name: "Silver Ring",
    category: "Jewelry",
    description: "Minimal silver ring with a clean and timeless design.",
    price: 799,
    image:
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 24,
    name: "Layered Chain Necklace",
    category: "Jewelry",
    description: "Modern layered chain necklace for a stylish statement look.",
    price: 1299,
    image:
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=800&q=80",
  },
];

export default products;