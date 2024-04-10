import { Box } from "@mui/material";
import React from "react";
import SquadraIcon from "../assets/SquadraLogo.svg";
import CustomTypo from "../customComponents/CustomTypo";
import manStanding from "../assets/manStanding.svg";
import { Link } from "react-router-dom";
export default function Design({ text1, text2, text3, text4, link }) {
  return (
    <>
      <Box
        sx={{
          minWidth: "50%",
          minHeight: "1060px",
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
        <Box sx={{ marginLeft: "172px" }}>
          <CustomTypo fontSize="64px" fontWeight="600" fontFamily="Poppins">
            {text1}
          </CustomTypo>
          <CustomTypo fontSize="36px" fontWeight="500" fontFamily="Poppins">
            {text2}
          </CustomTypo>
        </Box>
        <Box sx={{ marginLeft: "172px", marginTop: "52px" }}>
          <CustomTypo fontSize="20px" fontWeight="400" fontFamily="Poppins">
            {text4}
          </CustomTypo>
        </Box>
        <Box sx={{ marginLeft: "172px", marginTop: "10px" }}>
          <CustomTypo fontSize="20px" fontWeight="400" fontFamily="Poppins">
            you can{"  "}
            <Link
              to={link}
              style={{ textDecoration: "none", color: "#4D47C3" }}
            >
              {" " + text3}
            </Link>
          </CustomTypo>
        </Box>
        <img
          src={manStanding}
          alt="man standing"
          style={{ margin: "0px 0px 0px 577px" }}
        />
      </Box>
    </>
  );
}
