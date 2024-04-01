import { Typography } from "@mui/material";
import React from "react";

export default function CustomTypo({
  fontWeight,
  fontSize,
  color,
  lineHeight,
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
        }}
      >
        {children}
      </Typography>
    </>
  );
}
