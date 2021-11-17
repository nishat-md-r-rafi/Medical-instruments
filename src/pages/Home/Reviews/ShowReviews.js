import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { CardContent, Divider, Grid, Rating, Typography } from "@mui/material";
import { Box } from "@mui/material";
import { Card } from "react-bootstrap";

function ShowReviews(props) {
  const [reviews, setReviews] = useState([]);
  const [value, setValue] = React.useState(0);
  useEffect(() => {
    fetch("https://medieye.herokuapp.com/reviews")
      .then((response) => response.json())
      .then((data) => setReviews(data));
  }, []);
  console.log(reviews);
  return (
    <div>
      <h1>Valuable Customer Reviews</h1>
      <Box style={{ display: "flex" }}>
        {reviews.map((review) => (
          <Card>
            <CardContent>
              <Typography variant="h6">{review.review}</Typography>
              <Divider />
              <Typography variant="h8">{review.Name}</Typography>

              <Grid container>
                <Rating name="read-only" value={review.ratings} readOnly />
              </Grid>
            </CardContent>
          </Card>
        ))}
      </Box>
    </div>
  );
}

export default ShowReviews;
