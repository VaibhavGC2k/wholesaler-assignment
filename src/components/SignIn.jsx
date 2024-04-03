import { Box, Button } from "@mui/material";
import React from "react";
import CustomTypo from "../customComponents/CustomTypo";
import facebookIcon from "../icons/Facebook.svg";
import appleIcon from "../icons/apple.svg";
import googleIcon from "../icons/google.svg";
import CustomTextField from "../customComponents/CustomTextField";
import CustomButton from "../customComponents/CustomButton";

export default function SignIn() {
  return (
    <>
      <Box
        sx={{
          minWidth: "calc(100vw - 950px)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            rowGap: "38px",
          }}
        >
          <CustomTypo
            fontWeight="500"
            fontSize="32px"
            color="#000000"
            fontFamily="Poppins"
          >
            Sign in
          </CustomTypo>
          <CustomTextField placeholder="Enter email and user name" />
          <CustomTextField placeholder="Password" />
          <CustomTypo fontWeight="400px" fontSize="16px" color="#B0B0B0">
            Forgot password ?
          </CustomTypo>
          <CustomButton variant="contained" height="59px">
            Login
          </CustomButton>
          <Box
            sx={{
              width: "100%",
              maxHeight: "43.12px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <CustomTypo fontWeight="500" fontSize="16px" color="#B5B5B5">
              or continue with
            </CustomTypo>
            <Box
              sx={{
                marginTop: "48px",
                width: "165px",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <img src={facebookIcon} alt="Facebook Icon" />
              <img src={appleIcon} alt="Apple Icon" />
              <img src={googleIcon} alt="Google Icon" />
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
