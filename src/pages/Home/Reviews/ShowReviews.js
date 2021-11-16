import React from "react";
import { useEffect } from "react";
import { useState } from "react";

function ShowReviews(props) {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/reviews")
      .then((response) => response.json())
      .then((data) => setReviews(data));
  }, []);
  console.log(reviews);
  return (
    <div>
      <h1>Valuable Customer Reviews</h1>
      {reviews.map((review) => (
        <h1>{review.name}</h1>
      ))}
    </div>
  );
}

export default ShowReviews;
