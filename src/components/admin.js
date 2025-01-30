import React from "react";
import products from "../constants/products";
import { Link } from "react-router-dom";

function Admin() {
  return (
    <div>
      <h1>Admin Panel</h1>
      <ul>
        {products.map((product) => (
          <p key={product.id}>
            <Link to={`/admin/products/${product.id}`}>
              {product.name} - ${product.price}
            </Link>
          </p>
        ))}
      </ul>
    </div>
  );
}

export default Admin;
