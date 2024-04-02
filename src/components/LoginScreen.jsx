import React from "react";

import { Box } from "@mui/material";
import Design from "./Design";
import SignIn from "./SignIn";

export default function LoginScreen() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
         
        }}
      >
        <Design
          text1="Sign in to squadra to use the app"
          text2="If you don’t have an account register"
          text3="Register"
        />

        <SignIn />
      </Box>
    </>
  );
}
