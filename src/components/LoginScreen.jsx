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
          text1="Sign in to"
          text2="squadra to use the app"
          text3="Register here !"
          text4="If you don’t have an account register"
          link="/signup"
        />
        <SignIn />
      </Box>
    </>
  );
}
