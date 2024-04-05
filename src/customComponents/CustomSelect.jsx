import React from "react";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

const CustomSelect = ({ width, height, margin }) => {
  return (
    <Select
      placeholder="Who are You?"
      //   value={age}
      fullWidth
      InputLabelProps={{ shrink: true }}
      borderRadius="6px"
      borderColor="#F0EFFF"
      maxWidth="447px"
      maxHeight="57px"
      backgroundColor="#F0EFFF"
      fontFamily="Poppins !important"
    >
      <MenuItem value={"Developer"}>Developer</MenuItem>
      <MenuItem value={"Tester"}>Tester</MenuItem>
    </Select>
  );
};

export default CustomSelect;
