import React from "react";

export default function ProductDetail({ product }) {
  return (
    <div>
      <h1>Product Detail</h1>
      <p>Product Name: {product.productName}</p>
      <p>Product Category: {product.productCategory}</p>
      <p>Product Description: {product.productDescription}</p>
      <p>
        Product Image: <img src={product.productImage} alt="Product" />
      </p>
      <p>Product Freshness: {product.productFreshness}</p>
      <p>Product Price: ${product.productPrice.toFixed(2)}</p>
    </div>
  );
}
