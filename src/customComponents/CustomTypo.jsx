import { Typography } from "@mui/material";
import React from "react";

export default function CustomTypo({
  fontWeight,
  fontSize,
  color,
  lineHeight,
  fontFamily,
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