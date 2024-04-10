import React from "react";
import { Box } from "@mui/material";
import Design from "./Design";
import Signup from "../pages/Signup";

function SignupScreen() {
  return (
    <>
      <Box sx={{ display: "flex", flexDirection: "row" }}>
        <Box sx={{ width: "50%" }}>
          <Design
            text1="Sign Up to"
            text2="squadra to explore the app"
            text3="Login Here !"
            text4="If you already have an account register"
            link="/login"
          />
        </Box>
        <Box sx={{ margin:"102px 262px 43.12px 261px" }}>
          <Signup />
        </Box>
      </Box>
    </>
  );
}

export default SignupScreen;
