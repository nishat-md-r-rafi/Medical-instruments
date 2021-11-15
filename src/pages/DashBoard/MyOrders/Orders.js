import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Grid, TextField } from "@mui/material";
import useAuth from "../../../hooks/useAuth";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function Orders({ handleOpen, handleClose, open, info }) {
  // console.log(info);
  const { user } = useAuth();
  const [orderInfo, setOrderInfo] = React.useState({});

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newInfo = { ...orderInfo };
    newInfo[field] = value.toLowerCase();
    setOrderInfo(newInfo);
    console.log(orderInfo);
  };

  const handleBookingSubmit = (e) => {
    // collect data
    const orderInformation = {
      ...orderInfo,
      serviceName: info.name,
    };
    console.log(orderInformation);

    // send to the server
    fetch("https://medieye.herokuapp.com/orders", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(orderInformation),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          console.log("Data is Inserted");
        }
      });

    e.preventDefault();
  };
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <Box sx={style}>
            <img src={info.img} alt="" srcset="" />
            <Typography id="modal-modal-title" variant="h6" component="h2">
              {info.name}
            </Typography>
            <Typography id="modal-modal-description">
              {info.description}
            </Typography>

            <form onSubmit={handleBookingSubmit}>
              <TextField
                sx={{ width: "90%", m: 1 }}
                id="outlined-size-small"
                name="customerName"
                onBlur={handleOnBlur}
                defaultValue={user.displayName}
                size="small"
              />
              <TextField
                sx={{ width: "90%", m: 1 }}
                id="outlined-size-small"
                name="email"
                onBlur={handleOnBlur}
                defaultValue={user.email}
                size="small"
              />
              <TextField
                sx={{ width: "90%", m: 1 }}
                id="outlined-size-small"
                name="phone"
                onBlur={handleOnBlur}
                defaultValue="Phone Number"
                size="small"
                defaultValue="Phone Number"
              />

              <Button type="submit">Confirm Order</Button>
            </form>
          </Box>
        </Grid>
      </Grid>
    </Modal>
  );
}

export default Orders;
