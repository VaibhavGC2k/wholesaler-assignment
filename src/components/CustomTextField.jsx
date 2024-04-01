import { TextField } from "@mui/material";
import React from "react";

export default function CustomTextField({ placeholder, children }) {
  return (
    <>
      <TextField
        placeholder={placeholder}
        InputLabelProps={{
          shrink: true,
        }}
        InputProps={{
          style: {
            borderRadius: "10px",
            width: "447px",
            height: "62px",
            backgroundColor: "#F0EFFF",
          },
        }}
      >
        {children}
      </TextField>
    </>
  );
}
