import { Box } from "@mui/material";
import React from "react";
import Squadra from "../icons/Logo.svg";
import Component1 from "../icons/Component1.svg";
export default function HomePage() {
  return (
    <>
      <Box sx={{width:"1920px",height:"1080px"}}>
        <img src={Component1} alt="small logo" style={{maxWidth:"203px",maxHeight:"52px", marginTop: "238px",marginLeft: "352px"}} />
        <img
          src={Squadra}
          alt="logo"
          style={{ marginLeft: "282px", marginTop: "119px",maxWidth:"1225px",maxHeight:"314px" }}
        />
      </Box>
    </>
  );
}
