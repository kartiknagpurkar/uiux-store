import React from "react";

function Modals({ isOpen, onClose, product }) {
  if (!isOpen) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: "rgba(0,0,0,0.5)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          background: "#fff",
          padding: "1.5rem",
          borderRadius: "10px",
          width: "400px",
        }}
      >
        <h2>{product.name}</h2>
        <img src={product.image} alt={product.name} style={{ width: "100%" }} />
        <p>Price: ₹{product.price}</p>
        <p>{product.description}</p>
        <button onClick={onClose}>Close</button>
        <button style={{ marginLeft: "10px" }}>Add to Cart</button>
      </div>
    </div>
  );
}

export default Modals;
