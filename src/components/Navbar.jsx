import { AppBar, Box, Typography } from "@mui/material";

import React from "react";
import CustomTypo from "./CustomTypo";

export default function Navbar({ title }) {
  return (
    <>
      <Box>
        <AppBar
          position="static"
          sx={{
            paddingLeft: "41px",
            paddingTop: "33px",
            paddingBottom: "34px",
            minWidth: "115px",
            backgroundColor: "#F0EFFF",
            borderBottom: "40px solid black",
          }}
        >
          <CustomTypo
            fontWeight="600"
            fontSize="32px"
            color="#000000"
            lineHeight="48px"
          >
            {title}
          </CustomTypo>
        </AppBar>
      </Box>
    </>
  );
}
