import { Button } from "@mui/material";
import React from "react";
import CustomTypo from "./CustomTypo";

export default function CustomButton({
  onClick,
  padding,
  children,
  bgColor,
  color,
  width,
  margin,
  height,
}) {
  return (
    <>
      <Button
      onClick={onClick}
        sx={{
          backgroundColor: bgColor ? bgColor : "#4D47C3",
          borderRadius: "6px",
          padding: padding ? padding : "9px, 25px, 9px, 25px",
          maxWidth: width,
          maxHeight: height,
          gap: "10px",
          color: color ? color : "#FFFFFF",
          margin: margin ? margin : "",
          textTransform: "capitalize",
        }}
      >
        <CustomTypo fontFamily="Montserrat" fontSize="15px" fontWeight="400">
          {children}
        </CustomTypo>
      </Button>
    </>
  );
}
