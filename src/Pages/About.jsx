function About() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-12 text-center">
      <h1 className="text-4xl font-bold mb-6">About Us</h1>
      <p className="text-lg text-gray-700 mb-8 leading-relaxed">
        Welcome to <b className="text-blue-600">UIUX Store</b> 🛍️ – your one-stop destination 
        for stylish and affordable products.  
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">Our Mission</h2>
      <p className="text-gray-700 leading-relaxed mb-6">
        Our mission is to provide high-quality fashion and lifestyle products
        that make you look and feel great – all at pocket-friendly prices.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">What We Offer</h2>
      <ul className="list-none space-y-2 text-gray-700">
        <li>👕 Trendy T-Shirts</li>
        <li>👟 Stylish Shoes</li>
        <li>⌚ Premium Watches</li>
        <li>🎁 And much more...</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-10 mb-4">Why Choose Us?</h2>
      <div className="text-gray-700 space-y-2">
        <p>✅ Quality Products</p>
        <p>✅ Affordable Prices</p>
        <p>✅ Fast Delivery</p>
        <p>✅ 24/7 Customer Support</p>
      </div>

      <p className="mt-12 text-lg font-medium text-gray-800">
        Thank you for choosing <b className="text-blue-600">UIUX Store</b>.  
        We look forward to serving you!
      </p>
    </div>
  );
}

export default About;
