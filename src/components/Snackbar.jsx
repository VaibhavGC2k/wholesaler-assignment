import React, { useState } from "react";
import Snackbar from "@mui/material/Snackbar";
import { Alert, Box, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

export default function PositionedSnackbar({
  snackbarOpen,
  setSnackbarMessage,
  message
}) {
  const [state, setState] = React.useState({
    open: false,
    vertical: "top",
    horizontal: "center",
  });
  const { vertical, horizontal } = state;

  const handleClose = () => {
    setSnackbarMessage(false);
  };

  return (
    <>
      <Box
        sx={{
          maxWidth: "434.46px",
          maxHeight: "54px",
          marginTop: "63px",
          marginLeft: "528px",
        }}
      >
        <Snackbar
          anchorOrigin={{ vertical, horizontal }}
          open={snackbarOpen}
          autoHideDuration={5000}
          key={vertical + horizontal}
          onClose={handleClose}
          action={
            <IconButton
              size="small"
              aria-label="close"
              color="inherit"
              onClick={handleClose}
            >
              <CloseIcon fontSize="small" />
            </IconButton>
          }
        >
          <Alert
            onClose={handleClose}
            severity="success"
            variant="filled"
            icon={false} 
          >
            {message}
          </Alert>
        </Snackbar>
      </Box>
    </>
  );
}
