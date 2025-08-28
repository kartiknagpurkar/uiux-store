import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { CartContext } from "../Context/CartContext"; // ✅ Import Cart Context


 function Navbar() {
  const { cartItems } = useContext(CartContext); // ✅ Get cartItems

  return (
    <nav className="navbar navbar-expand-lg bg-light shadow-sm">
      <div className="container">
        {/* Brand */}
        <Link className="navbar-brand fw-bold fs-4 text-primary" to="/">
          <img
            src="/images/logo.jpg"
            alt="UIUX Logo"
            style={{ width: "40px", height: "40px", marginRight: "10px" }}
          />
          KN STORE
        </Link>

        {/* Toggler for mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto fw-semibold">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contacts</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/products">Products</Link>
            </li>
            <li className="nav-item">
              {/* ✅ Cart with Count */}
              <Link className="nav-link" to="/cart">
                Cart 🛒 
                {cartItems.length > 0 && (
                  <span className="badge bg-danger ms-1">{cartItems.length}</span>
                )}
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/checkout">Checkout</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;