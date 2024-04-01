import { Box } from "@mui/material";
import React from "react";
import SquadraIcon from "../icons/SquadraLogo.svg";
import CustomTypo from "./CustomTypo";
import manStanding from "../icons/manStanding.svg";
export default function Design({ text1, text2, text3 }) {
  return (
    <>
      <Box
        sx={{
          maxWidth: "50%",
          height: "100%",
          borderRadius: "0px, 70px, 70px, 0px",
          backgroundColor: "rgba(77, 71, 195, 0.1)",
        }}
      >
        <img
          src={SquadraIcon}
          alt="squadra Icon"
          //   style={{ width: "149px", height: "42px" }}
        />
        <Box>
          <CustomTypo fontWeight="600" fontSize="64px" lineHeight="96px">
            {text1}
          </CustomTypo>
          <CustomTypo fontWeight="500" fontSize="36px" lineHeight="54px">
            squadra to use the app
          </CustomTypo>
        </Box>
        <Box>
          <CustomTypo fontWeight="400" fontSize="20px" lineHeight="30px">
            {text2}
          </CustomTypo>
          <CustomTypo fontWeight="400" fontSize="20px" lineHeight="30px">
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
            style={{ width: "313px", height: "556px" }}
          />
        </Box>
      </Box>
    </>
  );
}
