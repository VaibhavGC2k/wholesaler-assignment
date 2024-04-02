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
            borderRadius: "6px",
            borderColor:"#F0EFFF",
            width: "447px",
            height: "62px",
            backgroundColor: "#F0EFFF",
            marginTop: "38px",
            fontFamily: "Poppins !important",
          },
        }}
      >
        {children}
      </TextField>
    </>
  );
}
