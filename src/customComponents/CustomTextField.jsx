import { TextField } from "@mui/material";
import React from "react";

export default function CustomTextField({
  name,
  onChange,
  placeholder,
  children,
  defaultValue,
  width,
  height,
  margin,
  helperText,
  error,
}) {
  return (
    <>
      <TextField
        name={name}
        onChange={onChange}
        placeholder={placeholder}
        InputLabelProps={{
          shrink: true,
        }}
        defaultValue={defaultValue}
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
        error={error ? error : ""}
        helperText={helperText ? helperText : ""}
      >
        {children}
      </TextField>
    </>
  );
}
