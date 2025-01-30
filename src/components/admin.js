// src/components/Home.js
import React from "react";
import { Link } from "react-router-dom";
import products from "../constants/products";

const Admin = () => {
  return (
    <div>
      <button>Add Product</button>
      {products.map((item) => (
        <p key={item.id}>
          <Link to={`/admin/product/${item.id}`}>{item.name}</Link>
        </p>
      ))}
    </div>
  );
};

export default Admin;
