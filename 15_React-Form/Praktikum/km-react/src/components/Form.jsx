import { useState, useEffect } from "react";
import React from "react";
import { Input, Select, TextArea, File, Radio, Toggle } from "./input";
import Button from "./Button";
import Table from "./table";
import "../styles/Form.css";

export default function Form() {
  const [productName, setProductName] = useState("");
  const [productCategory, setProductCategory] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productImage, setProductImage] = useState("");
  const [productFreshness, setProductFreshness] = useState("");
  const [productPrice, setProductPrice] = useState(0);
  const [products, setProducts] = useState([]);

  const [editingRow, setEditingRow] = useState(null);

  const [errorProductName, setErrorProductName] = useState("");
  const [errorProductCategory, setErrorProductCategory] = useState("");
  const [errorProductPrice, setErrorProductPrice] = useState("");
  const [errorProductImage, setErrorProductImage] = useState("");
  const [errorProductFreshness, setErrorProductFreshness] = useState("");

  const handleEdit = (data) => {
    setEditingRow(data);
  };

  const handleDelete = (id) => {
    const updatedProducts = products.filter((product) => product.id !== id);
    setProducts(updatedProducts);
  };

  useEffect(() => {
    alert("Welcome");
  }, []);

  function checkProductName(name) {
    const regex = /^[a-zA-Z0-9\s]+$/;
    if (!regex.test(name)) {
      setErrorProductName("Please enter a valid product name.");
      return false;
    } else if (name.length > 25) {
      setErrorProductName("Product Name must not exceed 25 characters.");
      return false;
    } else {
      setErrorProductName("");
      return true;
    }
  }

  function checkProductCategory(productCategory) {
    if (productCategory !== "Choose..." && productCategory !== "") {
      setErrorProductCategory("");
      return true;
    } else {
      setErrorProductCategory("Product category must be selected");
      return false;
    }
  }

  function checkProductPrice(productPrice) {
    const regex = /^\d+(\.\d{1,2})?$/;
    if (!regex.test(productPrice)) {
      setErrorProductPrice("Please enter a valid product price");
      return false;
    } else if (parseFloat(productPrice) <= 0) {
      setErrorProductPrice("Product price must be greater than zero");
      return false;
    } else {
      setErrorProductPrice("");
      return true;
    }
  }

  function checkProductFresh(productFreshness) {
    if (productFreshness !== "") {
      setErrorProductFreshness("");
      return true;
    } else {
      setErrorProductFreshness("Product freshness must be selected");
      return false;
    }
  }

  function checkProductImage(productImage) {
    if (productImage !== "") {
      setErrorProductImage("");
      return true;
    } else {
      setErrorProductImage("Images must be selected");
      return false;
    }
  }

  function handleProductNameChange(event) {
    const newName = event.target.value;
    setProductName(newName);
    checkProductName(newName);
  }

  function handleProductPriceChange(event) {
    const newPrice = event.target.valueAsNumber;
    setProductPrice(newPrice);
    checkProductPrice(newPrice);
  }

  function validateForm() {
    let isValid = true;

    if (!checkProductName(productName)) {
      isValid = false;
    }

    if (!checkProductCategory(productCategory)) {
      isValid = false;
    }

    if (!checkProductImage(productImage)) {
      isValid = false;
    }

    if (!checkProductFresh(productFreshness)) {
      isValid = false;
    }

    if (!checkProductPrice(productPrice)) {
      isValid = false;
    }

    return isValid;
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (validateForm()) {
      const product = {
        id: products.length + 1,
        productName: productName,
        productCategory: productCategory,
        productPrice: productPrice,
        productDescription: productDescription,
        productImage: "Image saved",
        productFreshness: productFreshness,
      };
      const dupeProducts = [...products, product];
      setProducts(dupeProducts);

      setProductFreshness("");
      setProductImage("");
      setProductName("");
      setProductCategory("Choose...");
      setProductPrice(0);
      setProductDescription("");
    } else {
      checkProductName(productName);
      checkProductCategory(productCategory);
      checkProductFresh(productFreshness);
      checkProductImage(productImage);
      checkProductPrice(productPrice);
    }
  }

  return (
    <div className="container w-50">
      <form onSubmit={handleSubmit}>
        <Input
          label="Product Name"
          type="text"
          value={productName}
          onChange={handleProductNameChange}
          errorMessage={errorProductName}
        />
        <Select
          label="Product Category"
          options={["T-Shirt", "Shoes", "Hat"]}
          value={productCategory}
          onChange={(event) => setProductCategory(event.target.value)}
          errorMessage={errorProductCategory}
        />
        <File
          label="Image Product"
          type="file"
          onChange={(event) => setProductImage(event.target.files[0])}
          errorMessage={errorProductImage}
        />
        <Radio
          header="Product Freshness"
          labels={["Brand new", "Second Hand", "Refurbished"]}
          onChange={(event) => setProductFreshness(event.target.value)}
          name="productFreshness"
          selectedValue={productFreshness}
          errorMessage={errorProductFreshness}
        />

        <TextArea
          label="Product Description"
          value={productDescription}
          onChange={(event) => setProductDescription(event.target.value)}
        />
        <Input
          label="Product Price"
          type="number"
          value={productPrice}
          onChange={handleProductPriceChange}
          errorMessage={errorProductPrice}
        />
        <div className="container w-full mt-12">
          <Button
            label="Submit"
            style={{
              backgroundColor: "#0D6EFD",
              border: "none",
              color: "white",
            }}
          ></Button>
        </div>
      </form>
      <div className="container px-3 overflow-auto md:px-[4rem] lg:px-[8rem]">
        <h1 className="text-center font-bold text-3xl mb-2">List Products</h1>
        <Table
          headers={[
            "No",
            "Product Name",
            "Product Category",
            "Product Image",
            "Product Freshness",
            "Product Price",
            "Product Description",
          ]}
          datas={products}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      </div>
    </div>
  );
}
