import { Button, CardActions, Typography } from "@mui/material";
import { Card, CardContent, CardMedia } from "@mui/material";
import React from "react";

function News(props) {
  const allNews = [
    {
      img: "https://www.philips.co.in/c-dam/b2bhc/us/Products/Category/magnetic-resonance/magnetic-resonance-new/mr-body-map.jpg",
      title: "All Products",
      description: "See our full listing of products by category",
    },
    {
      img: "https://www.philips.co.in/c-dam/b2bhc/us/Products/Category/magnetic-resonance/magnetic-resonance-new/mr-body-map.jpg",
      title: "Clinical Solution",
      description: "Explore our Dosewise and Live Image Guidance solutions.",
    },
    {
      img: "https://www.philips.co.in/c-dam/b2bhc/master/Products/Category/magnetic-resonance/netForum-community.jpg",
      title: "Healthcare consulting ",
      description:
        "Explore how Philips offers healthcare consulting in the areas of healthcare strategy.",
    },
  ];
  return (
    <div>
      <h1>Latest News</h1>
      <div className="d-flex">
        {allNews.map((news) => (
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              alt="device image"
              height="140"
              image={news.img}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {news.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {news.description}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default News;
