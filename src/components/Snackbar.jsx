import React, { useState } from "react";
import Snackbar from "@mui/material/Snackbar";
import { Alert, Box, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

export default function PositionedSnackbar({ snackbarOpen }) {
  const [state, setState] = React.useState({
    open: false,
    vertical: "top",
    horizontal: "center",
  });
  const { vertical, horizontal, open } = state;

  const handleClick = (newState) => () => {
    setState({ ...newState, open: true });
  };

  const handleClose = () => {
    setState({ ...state, open: false });
  };

  return (
    <>
      <Box sx={{ maxWidth: "434.46px",maxHeight:"54px",marginTop:"63px" }}>
        <Snackbar
          anchorOrigin={{ vertical, horizontal }}
          open={snackbarOpen}
          onClose={handleClose}
          message="The Wholesaler has been added successfully!"
          key={vertical + horizontal}
          
        />
        <IconButton onClick={handleClose}>
        <CloseIcon fontSize="small" />
      </IconButton>
      </Box>
    
      
    </>
  );
}
