import { TextField } from "@mui/material";
import React from "react";
import { useState } from "react";

function MakeAdmin(props) {
  const [email, setEmail] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
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
        <button type="submit" class="btn btn-primary">
          Make Admin
        </button>
      </form>
    </div>
  );
}

export default MakeAdmin;
