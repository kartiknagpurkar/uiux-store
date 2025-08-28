import React from "react";

function Card({ name, price, image }) {
  return (
    <div
      className="card-hover"
      style={{
        border: "1px solid #ccc",
        padding: "1rem",
        borderRadius: "10px",
        textAlign: "center",
        transition: "transform 0.3s, box-shadow 0.3s",
      }}
    >
      <img className="product-image" src={image} alt={name} style={{ width: "100%", borderRadius: "5px" }} />
      <h2>{name}</h2>
      <p>₹{price}</p>
      <button style={{ marginRight: "10px" }}>Add to Cart</button>
      <button>View Details</button>
    </div>
  );
}

export default Card;
