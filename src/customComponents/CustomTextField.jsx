import { TextField } from "@mui/material";
import React from "react";

export default function CustomTextField({
  placeholder,
  children,
  width,
  height,
  margin,
}) {
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
            borderColor: "#F0EFFF",
            width: width ? width : "447px",
            height: height ? height : "62px",
            backgroundColor: "#F0EFFF",
            margin: margin ? margin : "",
            fontFamily: "Poppins !important",
          },
        }}
      >
        {children}
      </TextField>
    </>
  );
}
