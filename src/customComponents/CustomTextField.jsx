import { TextField } from "@mui/material";
import React from "react";

export default function CustomTextField({
  backgroundColor,
  children,
  width,
  height,
  margin,
  ...rest
}) {
  return (
    <>
      <TextField
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
        {...rest}
      >
        {children}
      </TextField>
    </>
  );
}
