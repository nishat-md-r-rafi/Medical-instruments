import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Row } from "react-bootstrap";
import Product from "./Product";

function Products(props) {
  const [machine, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://medieye.herokuapp.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div>
      <h1 style={{ margin: "30px" }}>Get Your Products</h1>
      <Row xs={1} md={3} className="g-4">
        {machine.slice(4).map((product) => (
          <Product info={product}></Product>
        ))}
      </Row>
    </div>
  );
}

export default Products;
