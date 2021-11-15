import React from "react";
import Footer from "../../Footer/Footer";
import Banner from "../Banner/Banner";
import News from "../News/News";
import Products from "../Products/Products";
import Reviews from "../Reviews/Reviews";

function Home(props) {
  return (
    <div>
      <Banner></Banner>
      <Products></Products>
      <News></News>
      <Reviews></Reviews>
      <Footer></Footer>
    </div>
  );
}

export default Home;
