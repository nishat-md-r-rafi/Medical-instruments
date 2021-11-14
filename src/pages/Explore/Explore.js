import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Row } from "react-bootstrap";
import Product from "../Home/Products/Product";

function Explore(props) {
  const [machine, setMachine] = useState([]);
  useEffect(() => {
    fetch("https://medieye.herokuapp.com/products")
      .then((response) => response.json())
      .then((data) => setMachine(data));
  });
  return (
    <div>
      <h1 style={{ margin: "30px" }}>Explore our Products</h1>
      <Row xs={1} md={3} className="g-4">
        {machine.map((product) => (
          <Product info={product}></Product>
        ))}
      </Row>
    </div>
  );
}

export default Explore;
