import { Box, Button } from "@mui/material";
import React from "react";
import CustomTypo from "../customComponents/CustomTypo";
import facebookIcon from "../icons/Facebook.svg";
import appleIcon from "../icons/apple.svg";
import googleIcon from "../icons/google.svg";
import CustomTextField from "../customComponents/CustomTextField";

export default function SignIn() {
  return (
    <>
      <Box sx={{ minWidth: "calc(100vw - 950px)",display:"flex", justifyContent:"center",alignItems:"center" }}>
        <Box sx ={{
          display:"flex",
          flexDirection:"column",
          
        }}>
          <CustomTypo
            fontWeight="500"
            fontSize="32px"
            // marginBottom: "25px"
            color="#000000"
          >
            Sign in
          </CustomTypo>
          <CustomTextField placeholder="Enter email and user name" />
          <CustomTextField placeholder="Password" />
          <CustomTypo fontWeight="400px" fontSize="16px" color="#B0B0B0">
            Forgot password ?
          </CustomTypo>
          <Button
            variant="contained"
            sx={{
              borderRadius: "5px",
              backgroundColor: "#4D47C3",
            }}
          >
            Login
          </Button>
          <CustomTypo fontWeight="500" fontSize="16px" color="#B5B5B5">
            or continue with
          </CustomTypo>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-evenly",
            }}
          >
            <img src={facebookIcon} alt="Facebook Icon" />
            <img src={appleIcon} alt="Apple Icon" />
            <img src={googleIcon} alt="Google Icon" />
          </Box>
        </Box>
      </Box>
    </>
  );
}
