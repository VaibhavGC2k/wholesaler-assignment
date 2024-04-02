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
          width: "950px",
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderTopRightRadius: "70px",
          borderBottomRightRadius: "70px",
          flexDirection: "column",
          backgroundColor: "rgba(77, 71, 195, 0.1)",
        }}
      >
        <img
          src={SquadraIcon}
          alt="squadra Icon"
          style={{
            width: "149px",
          }}
        />
        <Box sx={{ margin: "" }}>
          <CustomTypo fontWeight="600" fontSize="64px">
            {text1}
          </CustomTypo>
          <CustomTypo fontWeight="500" fontSize="36px">
            squadra to use the app
          </CustomTypo>
        </Box>
        <Box sx={{ width: "316px" }}>
          <CustomTypo fontWeight="400" fontSize="20px">
            {text2}
          </CustomTypo>
          <CustomTypo fontWeight="400" fontSize="20px">
            You can{" "}
            <span style={{ fontWeight: "600", color: "rgba(77, 71, 195, 1)" }}>
              {" "}
              {text3} here !
            </span>
          </CustomTypo>
        </Box>
        <Box>
          <img
            src={manStanding}
            alt="squadra Icon"
            style={{ width: "313px" }}
          />
        </Box>
      </Box>
    </>
  );
}
