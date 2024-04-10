import { Button } from "@mui/material";
import React from "react";
import CustomTypo from "./CustomTypo";

export default function CustomButton({
  variant,
  onClick,
  borderRadius,
  padding,
  children,
  fontSize,
  width,
  margin,
  height
}) {
  return (
    <>
      <Button
        onClick={onClick}
        variant="outlined"
        sx={{
          backgroundColor: variant !== "outlined" ? "#4D47C3" : "",
          borderRadius: borderRadius ? borderRadius : "6px",
          padding: padding ? padding : "9px 25px 9px 25px",
          maxWidth: width,
          fontSize: fontSize,
          maxHeight: height ? height : "59px",
          gap: "10px",
          color: variant !== "outlined" ? "#FFFFFF" : "#4D47C3",
          margin: margin ? margin : "0px",
          textTransform: "capitalize",
          '&:hover': { backgroundColor: variant === "outlined" ? '' : '#4D47C3' },
          '&:active': { backgroundColor: variant === "outlined" ? '' : '#4D47C3' },
        }}
      >
        <CustomTypo fontFamily="Montserrat" fontSize="15px" fontWeight="400">
          {children}
        </CustomTypo>
      </Button>
    </>
  );
}