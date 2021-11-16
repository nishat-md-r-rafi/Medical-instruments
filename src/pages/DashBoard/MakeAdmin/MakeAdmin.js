import { TextField } from "@mui/material";
import React from "react";
import { useState } from "react";
import useAuth from "../../../hooks/useAuth";

function MakeAdmin(props) {
  const { user } = useAuth();
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    const user = { email };
    fetch("http://localhost:5000/users/admin", {
      method: "PUT",
      headers: {
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
  const handleOnBlur = (e) => {
    setEmail(e.target.value);
  };
  return (
    <div>
      <h3>Make Admin</h3>
      <form onSubmit={handleSubmit}>
        <TextField
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
