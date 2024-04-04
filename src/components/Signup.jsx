import React, { useState } from "react";
import CustomTypo from "../customComponents/CustomTypo";
import CustomTextField from "../customComponents/CustomTextField";
import { Box, Button, Checkbox, IconButton, InputAdornment, TextField } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import facebookIcon from "../icons/Facebook.svg";
import appleIcon from "../icons/apple.svg";
import googleIcon from "../icons/google.svg";

export default function Signup() {
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const commonInputProps = {
    style: {
      borderRadius: "6px",
      borderColor: "#F0EFFF",
      width: "447px",
      height: "62px",
      backgroundColor: "#F0EFFF",
      fontFamily: "Poppins",
    }
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", height: "700px", maxWidth: "447px", rowGap: "38px" }}>
      <CustomTypo fontWeight="500" fontSize="32px" fontFamily="Poppins" color="#000000">
        Sign Up
      </CustomTypo>
      <CustomTextField placeholder="Enter your name" />
      <CustomTextField placeholder="Phone number" />
      <CustomTextField placeholder="Enter your email Id" type="email" />
      <CustomTextField placeholder="DOB" type="date" />
      <CustomTextField placeholder="Who you are?" type="select" />
      <TextField
        placeholder="Password"
        type={showPassword ? "text" : "password"}
        InputProps={{
          ...commonInputProps,
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={handleTogglePassword} edge="end">
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
      <Box sx={{ display: "flex", alignItems: "center", marginLeft: "10px" }}>
        <Checkbox />
        <CustomTypo fontWeight="500" fontSize="16px" color="#B5B5B5">
          I accept the{" "}
          <a href="" style={{ color: "#3E7ADE", textDecoration: "none" }}>
            terms and conditions
          </a>
        </CustomTypo>
      </Box>
      <Button
        variant="contained"
        sx={{ borderRadius: "5px", backgroundColor: "#4D47C3", minHeight: "59px", textTransform: "capitalize" }}
      >
        <CustomTypo fontWeight="500" fontSize="16px" lineHeight="24px" color="#FFFFFF">
          Register
        </CustomTypo>
      </Button>
      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", textAlign: "center" }}>
        <CustomTypo fontWeight="500" fontSize="16px" lineHeight="24px" color="#B5B5B5">
          Or continue with
        </CustomTypo>
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "165px", "& img": { marginTop: "48px" } }}>
          <img src={facebookIcon} alt="Facebook Icon" />
          <img src={appleIcon} alt="Apple Icon" />
          <img src={googleIcon} alt="Google Icon" />
        </Box>
      </Box>
    </Box>
  );
}
