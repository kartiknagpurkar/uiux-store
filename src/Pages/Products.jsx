import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import "./Products.css"; // ✅ custom styling

const products = [
  { id: 1, name: "T-Shirt", price: 499, image: "/images/t-shirt.jpg" },
  { id: 2, name: "Shoes", price: 1499, image: "/images/shoes.jpg" },
  { id: 3, name: "Watch", price: 1999, image: "/images/watch.jpg" },
  { id: 4, name: "mobile", price: 19999, image: "/images/mobile.jpg" },
  { id: 5, name: "laptop", price: 40000, image: "/images/laptop.jpg" },
  { id: 6, name: "bag", price: 1499, image: "/images/bag.jpg" },
  { id: 7, name: "Moniter", price: 3499, image: "/images/moniter.jpg" },
  { id: 8, name: "tv", price: 7899, image: "/images/tv.jpg" },
];

function Products() {
  const { addToCart } = useContext(CartContext);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="products-container">
      <h1 className="products-title">Products</h1>

      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />

      

      
       <div className="products-grid">
        {filteredProducts.map((product) => (
          <div key={product.id} className="product-card">
            <img
              src={product.image}
              alt={product.name}
              className="product-image"
            />
            <h2 className="product-name">{product.name}</h2>
            <p className="product-price">₹{product.price}</p>
            <div className="btn-group">
              <button onClick={() => addToCart(product)} className="add-btn">
                Add to Cart 🛒
              </button>
              <button className="add-btn">
                View Details 👀
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
