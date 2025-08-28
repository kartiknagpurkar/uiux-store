import React, { useContext, useState } from "react";
import { CartContext } from "../Context/CartContext";
import "./checkout.css"; 
function Checkout() {
  const { cartItems, clearCart } = useContext(CartContext);
  const [form, setForm] = useState({
    name: "",
    email: "",
    address: "",
    phone: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleOrder = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.address || !form.phone) {
      alert("Please fill all fields!");
      return;
    }
    alert(`✅ Order placed successfully!\nThank you, ${form.name}`);
    clearCart();
  };

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="checkout-container">
      <h2>Checkout</h2>

      {/* Cart Summary */}
      <div className="cart-summary">
        <h3>Order Summary</h3>
        {cartItems.length === 0 ? (
          <p>Your cart is empty!</p>
        ) : (
          <ul>
            {cartItems.map((item) => (
              <li key={item.id}>
                {item.name} x {item.quantity} = ₹{item.price * item.quantity}
              </li>
            ))}
          </ul>
        )}
        <h3>Total: ₹{totalPrice}</h3>
      </div>

      {/* Checkout Form */}
      <form onSubmit={handleOrder} className="checkout-form">
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={form.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
        />
        <input
          type="text"
          name="address"
          placeholder="Address"
          value={form.address}
          onChange={handleChange}
        />
        <input
          type="text"
          name="phone"
          placeholder="Phone"
          value={form.phone}
          onChange={handleChange}
        />
        <button type="submit">Place Order</button>
      </form>
    </div>
  );
}

export default Checkout;
