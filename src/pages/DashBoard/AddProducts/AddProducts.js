import { TextField } from "@mui/material";
import React from "react";
import { useState } from "react";

function AddProducts(props) {
  const [product, setProduct] = useState({});
  const handleBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newProduct = { ...product };
    newProduct[field] = value;
    setProduct(newProduct);
    console.log(product);
  };
  const handleProductSubmit = (e) => {
    e.preventDefault();
    fetch("https://medieye.herokuapp.com/products", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(product),
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  };
  return (
    <div>
      <h1>Add products you wanted</h1>
      <form onSubmit={handleProductSubmit}>
        <TextField
          sx={{ width: "100%" }}
          id="outlined-textarea"
          label="Name"
          placeholder="Placeholder"
          name="name"
          multiline
          onBlur={handleBlur}
        />
        <TextField
          sx={{ my: 3, width: "100%" }}
          id="outlined-textarea"
          label="Description"
          placeholder="Placeholder"
          name="description"
          onBlur={handleBlur}
          multiline
        />
        <TextField
          sx={{ width: "100%" }}
          id="outlined-textarea"
          label="URL"
          placeholder="Placeholder"
          name="img"
          onBlur={handleBlur}
          multiline
        />
        <button type="submit" className="btn btn-primary m-4">
          Add It
        </button>
      </form>
    </div>
  );
}

export default AddProducts;
