import { Box } from "@mui/material";
import React from "react";
import SquadraIcon from "../icons/SquadraLogo.svg";
import CustomTypo from "../customComponents/CustomTypo";
import manStanding from "../icons/manStanding.svg";
export default function Design({ text1, text2, text3 }) {
  return (
    <>
      <Box
        sx={{
          minWidth: "50%",
          minHeight: "1080px",
          backgroundColor: "#F0EFFF",
          borderTopRightRadius: "70px",
          borderBottomRightRadius: "70px",
        }}
      >
        <img
          src={SquadraIcon}
          alt="logo"
          style={{ margin: "49px 629px 171px 172px" }}
        />
        <Box sx={{marginLeft:"172px"}}>
          <CustomTypo fontSize="64px" fontWeight="600" >{text1}</CustomTypo>
          <CustomTypo fontSize="36px" fontWeight="500">{text2}</CustomTypo>
        </Box>
        <Box sx={{marginLeft:"172px",marginTop:"52px"}}>
        <CustomTypo fontSize="20px" fontWeight="400">{text3}</CustomTypo>
        </Box>
        <img
          src={manStanding}
          alt="man standing"
          style={{ margin: "12px 60px 44px 577px" }}
        />
      </Box>
    </>
  );
}
