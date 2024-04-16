import { TextField } from "@mui/material";
import React from "react";

export default function CustomTextField({
  onChange,
  placeholder,
  backgroundColor,
  name,
  children,
  error,
  helperText,
  width,
  height,
  margin,
  ...rest
}) {
  return (
    <>
      <TextField
        placeholder={placeholder}
        error={error}
        helperText={helperText}
        InputLabelProps={{
          shrink: true,
        }}
        name={name}
        onChange={onChange}
        InputProps={{
          style: {
            borderRadius: "6px",
            borderColor: "#F0EFFF",
            width: width ? width : "447px",
            height: height ? height : "62px",
            backgroundColor: "#F0EFFF",
            margin: margin,
            fontFamily: "Poppins !important",
            placeContent: "Who are you?"
          },
        }}
        {...rest}
      >
        {children}
      </TextField>
    </>
  );
}