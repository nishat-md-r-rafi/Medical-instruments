import { TextField } from "@mui/material";
import React from "react";
import { useState } from "react";
import useAuth from "../../../hooks/useAuth";

function Reviews(props) {
  const [review, setReview] = useState({});
  const { user } = useAuth();

  const handleBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newReview = { ...review };
    newReview[field] = value;
    setReview(newReview);
    console.log(review);
  };
  console.log(user);

  const handleReviewSubmit = (e) => {
    fetch("https://medieye.herokuapp.com/reviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(review),
    }).then();
    e.preventDefault();
    e.target.reset();
  };

  return (
    <div>
      <h1>Give your reviews</h1>
      <form className="m-5" onSubmit={handleReviewSubmit}>
        <TextField
          fullWidth
          margin="dense"
          onBlur={handleBlur}
          id="outlined-basic"
          label="Your Review"
          variant="outlined"
          name="review"
        />
        <br></br>
        <TextField
          fullWidth
          margin="dense"
          onBlur={handleBlur}
          id="outlined-basic"
          label="Name"
          variant="outlined"
          name="Name"
          defaultValue={user.displayName}
        />
        <br></br>
        <TextField
          onBlur={handleBlur}
          hiddenLabel
          id="outlined-basic"
          label="Ratings"
          variant="outlined"
          name="ratings"
          size="small"
        />
        <br></br>
        <button type="submit" className="btn btn-primary m-4">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Reviews;
