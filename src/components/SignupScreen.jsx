import React from "react";
import Navbar from "./Navbar";
import { Box } from "@mui/material";
import Design from "./Design";
import Signup from "./Signup";

function SignupScreen() {
  return (
    <>
      <Navbar title={"Signup Screen"} />
      <Box sx={{ display: "flex", flexDirection: "row" }}>
        <Box sx={{ width: "50%" }}>
          <Design
            text1="Sign Up to"
            text2="If you already have an account"
            text3="Login"
          />
        </Box>
        <Box sx={{ minWidth: "50%" }}>
          <Signup />
        </Box>
      </Box>
    </>
  );
}

export default SignupScreen;
