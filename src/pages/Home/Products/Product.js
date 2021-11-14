import React from "react";
import { useState } from "react";
import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Orders from "../../DashBoard/MyOrders/Orders";

function Product(props) {
  const { name, img, description } = props.info;

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Col>
        <Card>
          <Card.Img variant="top" src={img} />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>{description}</Card.Text>
            <button onClick={handleOpen} className="btn btn-primary">
              Order Now
            </button>
          </Card.Body>
        </Card>
      </Col>
      <Orders
        info={props.info}
        handleClose={handleClose}
        handleOpen={handleOpen}
        open={open}
      ></Orders>
    </div>
  );
}

export default Product;
