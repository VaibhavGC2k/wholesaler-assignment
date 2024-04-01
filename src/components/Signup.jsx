import React from "react";
import CustomTypo from "./CustomTypo";
import { Box, Button, Checkbox, Typography } from "@mui/material";
import facebookIcon from "../icons/Facebook.svg";
import appleIcon from "../icons/apple.svg";
import googleIcon from "../icons/google.svg";
import CustomTextField from "./CustomTextField";

export default function Signup() {
  return (
    <>
      <Box sx={{ display: "flex", flexDirection: "column", maxWidth: "447px" }}>
        <CustomTypo
          fontWeight="500"
          fontSize="32px"
          // marginBottom: "25px"
          lineHeight="48px"
          color="#000000"
        >
          Sign Up
        </CustomTypo>
        <CustomTextField placeholder="Enter your name" />
        <CustomTextField placeholder="Phone number" />
        <CustomTextField placeholder="Enter your email Id" />
        <CustomTextField placeholder="DOB" />
        <CustomTextField placeholder="Who you are?" />
        <CustomTextField placeholder="Password" />
        <Box
          sx={{
            display: "flex",
            alignItems: "center", // Align items vertically center
            marginBottom: "20px",
            marginLeft: "-10px",
          }}
        >
          <Checkbox />
          <CustomTypo
            fontWeight="500"
            fontSize="16px"
            lineHeight="24px"
            color="#B5B5B5"
          >
            I accept the{" "}
            <a href="" style={{ color: "#3E7ADE", textDecoration: "none" }}>
              terms and conditions
            </a>
          </CustomTypo>
        </Box>
        <Button
          variant="contained"
          sx={{
            borderRadius: "5px",
            backgroundColor: "#4D47C3",
            minHeight: "59px",
          }}
        >
          Register
        </Button>
        <CustomTypo
          fontWeight="500"
          fontSize="16px"
          lineHeight="24px"
          color="#B5B5B5"
        >
          or continue with
        </CustomTypo>
        <Box
          sx={{
            maxWidth: "165px",
            minHeight: "43.12px",
            display: "flex",
            justifyContent: "space-evenly",
          }}
        >
          <img src={facebookIcon} alt="Facebook Icon" />
          <img src={appleIcon} alt="Apple Icon" />
          <img src={googleIcon} alt="Google Icon" />
        </Box>
      </Box>
    </>
  );
}
