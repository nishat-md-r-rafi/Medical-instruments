import { Alert } from "@mui/material";
import { TextField } from "@mui/material";
import React from "react";
import { useState } from "react";
import { Button, Container } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

function Register(props) {
  const [loginData, setLoginData] = useState({});
  const history = useHistory();
  const { user, registerUser } = useAuth();

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
    console.log(loginData);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted");
    registerUser(loginData.email, loginData.password, loginData.name, history);
  };
  return (
    <div>
      <h1>Please register if you do not already!</h1>
      <Container
        style={{
          backgroundColor: "lightBlue",
          borderRadius: "10px",
          padding: "20px",
        }}
      >
        <form onSubmit={handleSubmit}>
          <TextField
            sx={{ width: "75%", m: 1 }}
            id="standard-basic"
            label="Your Name"
            name="name"
            onBlur={handleOnBlur}
            variant="standard"
          />
          <TextField
            sx={{ width: "75%", m: 1 }}
            id="standard-basic"
            label="Your Email"
            name="email"
            type="email"
            onBlur={handleOnBlur}
            variant="standard"
          />
          <TextField
            sx={{ width: "75%", m: 1 }}
            id="standard-basic"
            label="Your Password"
            type="password"
            name="password"
            onBlur={handleOnBlur}
            variant="standard"
          />
          <br></br>
          <Button style={{ margin: "20px" }} type="submit">
            Register
          </Button>
        </form>
        {user?.email && (
          <Alert severity="success">User Created successfully!</Alert>
        )}
      </Container>
    </div>
  );
}

export default Register;
