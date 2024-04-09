import { Button } from "@mui/material";
import React from "react";
import CustomTypo from "./CustomTypo";

export default function CustomButton({
  variant,
  onClick,
  padding,
  children,
  fontSize,
  bgColor,
  color,
  width,
  margin,
  height
}) {
  return (
    <>
      <Button
        onClick={onClick}
        variant={variant}
        sx={{
          backgroundColor: bgColor ? bgColor : "#4D47C3",
          borderRadius: "6px",
          padding: padding ? padding : "9px 25px 9px 25px",
          maxWidth: width,
          fontSize: { fontSize },
          maxHeight: height ? height : "59px",
          gap: "10px",
          color: color ? color : "#FFFFFF",
          margin: margin ? margin : "0px",
          textTransform: "capitalize",
          '&:hover': { backgroundColor: '#4D47C3' },
          '&:active': { backgroundColor: '#4D47C3' }
        }}
      >
        <CustomTypo fontFamily="Montserrat" fontSize="15px" fontWeight="400">
          {children}
        </CustomTypo>
      </Button>
    </>
  );
}
