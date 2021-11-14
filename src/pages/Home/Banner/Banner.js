import React from "react";
import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";

function Banner(props) {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://st2.depositphotos.com/1001146/5420/i/950/depositphotos_54207055-stock-photo-mri-scanner-machine-in-hospital.jpglide&bg=373940"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>MRI Scanning</h3>
            <p>Take your MRI machine with discount!</p>
            <Link to="/explore">Explore Our Products</Link>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Banner;
