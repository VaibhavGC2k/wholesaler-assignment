import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import navLogo from "../assets/navLogo.png";
import CustomTypo from "../customComponents/CustomTypo";

export default function Navbar() {
  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1,
          backgroundColor: "#F1F0FA",
          boxShadow: "none",
          height: "90px",
          width: "100%",
        }}
      >
        <Toolbar
          sx={{
            paddingLeft: "0px !important",
            paddingRight: "0px  !important",
          }}
        >
          <Box
            sx={{
              width: "149px",
              height: "42px",
              display: "flex",
              alignItems: "center",
              margin: "24px 0px 24px 36px",
            }}
          >
            <img
              src={navLogo}
              alt="Squadron logo"
              width="40px"
              height="42px"
              style={{ marginRight: "10px" }}
            />
            <CustomTypo
              fontFamily="Prompt"
              fontWeight="600"
              fontSize="24px"
              color="#000000"
            >
              Squadra
            </CustomTypo>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
}
