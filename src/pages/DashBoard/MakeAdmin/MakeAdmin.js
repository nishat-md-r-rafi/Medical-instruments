import { TextField } from "@mui/material";
import React from "react";
import { useState } from "react";
import useAuth from "../../../hooks/useAuth";

function MakeAdmin(props) {
  const [email, setEmail] = useState("");
  const { token } = useAuth();
  const handleOnBlur = (e) => {
    setEmail(e.target.value);
  };

  // http://localhost:5000/users/admin
  const handleSubmit = (e) => {
    const user = { email };
    fetch("https://medieye.herokuapp.com/users/admin", {
      method: "PUT",
      headers: {
        authorization: `Bearer ${token}`,
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          console.log(data);
        }
      });

    e.preventDefault();
    e.target.reset();
  };
  return (
    <div>
      <h3>Make Admin</h3>
      <form onSubmit={handleSubmit}>
        <TextField
          sx={{ width: "50%" }}
          onBlur={handleOnBlur}
          id="standard-basic"
          label="Enter Email"
          variant="standard"
        />
        <button type="submit" class="btn btn-primary mt-3">
          Make Admin
        </button>
      </form>
    </div>
  );
}

export default MakeAdmin;
