import React from "react";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

const CustomSelect = ({ placeholder }) => {
  return (
    <Select
      fullWidth
      placeholder={placeholder}
      InputLabelProps={{ shrink: true }}
      borderRadius="6px"
      borderColor="#F0EFFF"
      maxWidth="447px"
      maxHeight="57px"
      sx={{ backgroundColor: "#F0EFFF" }}
      fontFamily="Poppins !important"
    >
      <MenuItem value={"Developer"}>Developer</MenuItem>
      <MenuItem value={"Tester"}>Tester</MenuItem>
    </Select>
  );
};

export default CustomSelect;
