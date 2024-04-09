import { Typography } from "@mui/material";
import React from "react";

export default function CustomTypo({
  style,
  fontWeight,
  fontSize,
  color,
  lineHeight,
  fontFamily,
  width,
  height,
  children,
}) {
  return (
    <>
      <Typography
        sx={{
          fontWeight: fontWeight,
          fontSize: fontSize,
          lineHeight: lineHeight,
          color: color,
          fontFamily: fontFamily,
        }}
      >
        {children}
      </Typography>
    </>
  );
}
