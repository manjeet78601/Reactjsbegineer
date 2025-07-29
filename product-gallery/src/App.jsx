import React, { useEffect, useState } from "react";
import ProductCard from "./components/ProductCard";
import "./App.css";

const App = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Failed to fetch products", err));
  }, []);

  return (
    <div className="app">
      <h1>Product Gallery</h1>
      <div className="product-grid">
        {products.map((prod) => (
          <ProductCard key={prod.id} product={prod} />
        ))}
      </div>
    </div>
  );
};

export default App;
