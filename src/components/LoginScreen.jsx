import React from "react";
import Navbar from "./Navbar";
import { Box } from "@mui/material";
import Design from "./Design";
import SignIn from "./SignIn";

export default function LoginScreen() {
  return (
    <>
      <Navbar title={"Login Screen"} />
      <Box sx={{ display: "flex", flexDirection: "row" }}>
        <Box sx={{ width: "50%" }}>
          <Design
            text1="Sign in to"
            text2="If you don’t have an account register"
            text3="Register"
          />
        </Box>
        <Box sx={{ minWidth: "50%" }}>
          <SignIn />
        </Box>
      </Box>
    </>
  );
}
