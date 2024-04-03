import React from "react";

import { Box } from "@mui/material";
import Design from "./Design";
import Signup from "./Signup";

function SignupScreen() {
  return (
    <>
      <Box sx={{ display: "flex", flexDirection: "row" }}>
        <Box sx={{ width: "50%" }}>
          <Design
            text1="Sign Up to"
            text2="squadra to explore the app"
            text3="Login Here !"
            link="/login"
          />
        </Box>
        <Box sx={{ margin:"102px 262px 43.88px 261px" }}>
          <Signup />
        </Box>
      </Box>
    </>
  );
}

export default SignupScreen;
