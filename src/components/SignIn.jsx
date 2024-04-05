import { Box, Button } from "@mui/material";
import React, { useState } from "react";
import CustomTypo from "../customComponents/CustomTypo";
import facebookIcon from "../icons/Facebook.svg";
import appleIcon from "../icons/apple.svg";
import googleIcon from "../icons/google.svg";
import CustomTextField from "../customComponents/CustomTextField";
import CustomButton from "../customComponents/CustomButton";
import { Checkbox, IconButton, InputAdornment, TextField } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

import { Link, Navigate } from "react-router-dom";
export default function SignIn() {
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
    },
  };

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
          <TextField
            placeholder="Password"
            type={showPassword ? "text" : "password"}
            InputProps={{
              ...commonInputProps,
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={handleTogglePassword} edge="end">
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>s
                </InputAdornment>
              ),
            }}
          />
          <CustomTypo fontWeight="400px" fontSize="16px" color="#B0B0B0">
            Forgot password ?
          </CustomTypo>
          
        <Button
        variant="contained"
        sx={{
          borderRadius: "5px",
          backgroundColor: "#4D47C3",
          minHeight: "59px",
          textTransform: "capitalize",
        }}
      >
        <CustomTypo
          fontWeight="500"
          fontSize="16px"
          lineHeight="24px"
          color="#FFFFFF"
        >
          Login
        </CustomTypo>
      </Button>
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
