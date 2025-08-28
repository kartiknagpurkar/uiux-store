// src/Pages/Home.jsx
import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="container mt-2">
      {/* Hero Section */}
      <div className="text-center py-2">
        <h1 className="display-4 fw-bold">Welcome to UIUX Store 🛍️</h1>
        <p className="lead">
          Your one-stop destination for trendy, affordable, and stylish products.
        </p>
        <Link to="/products" className="btn btn-primary btn-lg mt-2">
          Shop Now
        </Link>
      </div>

      {/* Features Section */}
      <div className="row text-center mt-3">
        <div className="col-md-4">
          <h3>✨ Quality</h3>
          <p>Only the best quality products that last longer.</p>
        </div>
        <div className="col-md-4">
          <h3>🚚 Fast Delivery</h3>
          <p>Get your order delivered quickly at your doorstep.</p>
        </div>
        <div className="col-md-4">
          <h3>💰 Affordable</h3>
          <p>Trendy products at pocket-friendly prices.</p>
        </div>
      </div>

      {/* Featured Products */}
      <div className="mt-5">
        <h2 className="text-center mb-4">Featured Products</h2>
        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <img
                src="/images/t-shirt.jpg"
                className="product-image"
                alt="Product 1"
              />
              <div className="card-body text-center">
                <h5 className="card-title">Trendy T-Shirt</h5>
                <p className="card-text">Cool and comfy cotton T-shirt.</p>
                <Link to="/products" className="btn btn-outline-primary">
                  View More
                </Link>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card">
              <img
                src="/images/shoes.jpg"
               className="product-image"
                alt="Product 2"
              />
              <div className="card-body text-center">
                <h5 className="card-title">Stylish Shoes</h5>
                <p className="card-text">Comfortable & trendy sneakers.</p>
                <Link to="/products" className="btn btn-outline-primary">
                  View More
                </Link>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card">
              <img
              // className="product-image"
                src="/images/watch.jpg"
                className="product-image"
                alt="Product 3"
              />
              <div className="card-body text-center">
                <h5 className="card-title">Premium Watch</h5>
                <p className="card-text">Elegant design for every occasion.</p>
                <Link to="/products" className="btn btn-outline-primary">
                  View More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center py-5">
        <h2>Ready to Shop?</h2>
        <Link to="/products" className="btn btn-success btn-lg">
          Explore Products
        </Link>
      </div>
    </div>
  );
}

export default Home;
