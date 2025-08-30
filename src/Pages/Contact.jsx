
import React, { useState } from "react";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    let newErrors = {};

    if (!form.name.trim()) {
      newErrors.name = "Name is required.";
    } else if (form.name.length < 3) {
      newErrors.name = "Name must be at least 3 characters.";
    }

    if (!form.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Email is not valid.";
    }

    if (!form.message.trim()) {
      newErrors.message = "Message is required.";
    } else if (form.message.length < 10) {
      newErrors.message = "Message must be at least 10 characters.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // ✅ if no errors
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert("✅ Message sent!\n" + JSON.stringify(form, null, 2));
      setForm({ name: "", email: "", message: "" });
      setErrors({});
    }
  };

  return (
    <div className="container" style={{ maxWidth: "600px", margin: "0 auto" }}>
      <h1 className="text-center my-4">📩 Contact Us</h1>
      <p className="text-muted text-center">
        Have any questions? Send us a message below 👇
      </p>

      <form onSubmit={handleSubmit} noValidate>
        {/* Name */}
        <div className="mb-3">
          <label className="form-label">Your Name</label>
          <input
            type="text"
            className={`form-control ${errors.name ? "is-invalid" : ""}`}
            name="name"
            value={form.name}
            onChange={handleChange}
          />
          {errors.name && (
            <div className="invalid-feedback">{errors.name}</div>
          )}
        </div>

        {/* Email */}
        <div className="mb-3">
          <label className="form-label">Your Email</label>
          <input
            type="email"
            className={`form-control ${errors.email ? "is-invalid" : ""}`}
            name="email"
            value={form.email}
            onChange={handleChange}
          />
          {errors.email && (
            <div className="invalid-feedback">{errors.email}</div>
          )}
        </div>

        {/* Message */}
        <div className="mb-3">
          <label className="form-label">Your Message</label>
          <textarea
            className={`form-control ${errors.message ? "is-invalid" : ""}`}
            rows="4"
            name="message"
            value={form.message}
            onChange={handleChange}
          ></textarea>
          {errors.message && (
            <div className="invalid-feedback">{errors.message}</div>
          )}
        </div>

        <button type="submit" className="btn btn-primary w-100">
          🚀 Send Message
        </button>
      </form>
    </div>
  );
}

export default Contact;
