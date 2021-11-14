import { Button, Grid, TextField, Typography } from "@mui/material";
import React from "react";
import { useState } from "react";
import { Container } from "react-bootstrap";
import { Link, useHistory, useLocation } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

function Login(props) {
  const [loginData, setLoginData] = useState({});
  const location = useLocation();
  const history = useHistory();
  const { user, logIn, signInUsingGoogle, authError } = useAuth();
  const handleSubmit = (e) => {
    e.preventDefault();
    logIn(loginData.email, loginData.password, location, history);
  };
  const handleChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };

  return (
    <Container>
      <form onSubmit={handleSubmit} style={{ margin: "50px" }}>
        <TextField
          sx={{ width: "75%", m: 1 }}
          id="standard-basic"
          label="Your Email"
          name="email"
          onChange={handleChange}
          variant="standard"
        />
        <TextField
          sx={{ width: "75%", m: 1 }}
          id="standard-basic"
          label="Your Password"
          type="password"
          name="password"
          onChange={handleChange}
          variant="standard"
        />

        <Button sx={{ width: "75%", m: 2 }} type="submit" variant="contained">
          Login
        </Button>
      </form>

      {user?.email ? (
        <h1>You Are Logged In :)</h1>
      ) : (
        <h3 style={{ margin: "10px" }}>Sign In Using Google?</h3>
      )}
      {user.email || (
        <button className="btn btn-primary" onClick={signInUsingGoogle}>
          Sign In With Google
        </button>
      )}
      <br />

      <h3 style={{ margin: "10px" }}>Or</h3>

      {!user.email && (
        <Link style={{ textDecoration: "none", margin: "30px" }} to="/register">
          Register Your Account
        </Link>
      )}
    </Container>
  );
}

export default Login;
