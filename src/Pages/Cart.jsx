import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Cart() {
  const { cartItems, removeFromCart, clearCart } = useContext(CartContext);

  // If cart empty
  if (cartItems.length === 0) {
    return <h2 className="text-center mt-5">🛒 Your Cart is Empty</h2>;
  }

  // Calculate total
  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Your Cart</h2>
      {cartItems.map((item) => (
        <div
          key={item.id}
          className="d-flex justify-content-between align-items-center border p-2 mb-2"
        >
          <div className="d-flex align-items-center">
            <img
              src={item.image}
              alt={item.name}
              style={{ width: "80px", height: "80px", objectFit: "cover", marginRight: "10px" }}
            />
            <div>
              <h5>{item.name}</h5>
              <p>₹{item.price} × {item.quantity}</p>
            </div>
          </div>
          <button
            className="btn btn-danger btn-sm"
            onClick={() => removeFromCart(item.id)}
          >
            Remove
          </button>
        </div>
      ))}

      <h4 className="mt-3">Total: ₹{total}</h4>
      <div className="mt-3">
        <button className="btn btn-warning me-2" onClick={clearCart}>
          Clear Cart
        </button>
        <button className="btn btn-success">
          Checkout
        </button>
      </div>
    </div>
  );
}

export default Cart;
