import React from "react";
import Banner from "../Banner/Banner";
import News from "../News/News";
import Products from "../Products/Products";
import Reviews from "../Reviews/Reviews";

function Home(props) {
  return (
    <div>
      <h1>This is home</h1>
      <Banner></Banner>
      <Products></Products>
      <News></News>
      <Reviews></Reviews>
    </div>
  );
}

export default Home;
