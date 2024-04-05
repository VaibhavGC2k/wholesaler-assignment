import { TextField } from "@mui/material";
import React from "react";

export default function CustomTextField({
  backgroundColor,
  required,
  type,
  name,
  disabled,
  onChange,
  placeholder,
  children,
  defaultValue,
  width,
  height,
  margin,
  helperText,
  error,
  value,
}) {
  return (
    <>
      <TextField
        required={required}
        value={value}
        type={type}
        disabled={disabled}
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
        error={error}
        helperText={helperText}
      >
        {children}
      </TextField>
    </>
  );
}
