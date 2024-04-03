import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import CustomTypo from "../customComponents/CustomTypo";
import modalClose from "../icons/modalClose.svg";
import { Divider, Grid } from "@mui/material";
import CustomTextField from "../customComponents/CustomTextField";
import CustomButton from "../customComponents/CustomButton";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "1466px",
  height: "596px",
  bgcolor: "#FFFFFF",
  borderRadius: "6px",
};

export default function EditModal({ openEdit, setOpenEdit }) {
  const handleClose = () => setOpenEdit(false);
  return (
    <>
      <Modal
        open={openEdit}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box
            sx={{
              marginLeft: "58px",
              marginTop: "31px",
              marginBottom: "16px",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <CustomTypo
              fontFamily="Montserrat"
              fontSize="20px"
              fontWeight="600"
              color="#4D47C3"
            >
              Edit Wholesaler
            </CustomTypo>
            <Button sx={{ marginRight: "40px" }} onClick={handleClose}>
              <img
                src={modalClose}
                alt="modal Close"
                width="38px"
                height="38px"
              />
            </Button>
          </Box>
          <Divider
            sx={{ maxWidth: "1418px", color: "#CACACA", marginLeft: "24px" }}
          />
          <Box
            sx={{
              flexGrow: 1,
              marginTop: "29px",
              marginLeft: "40px",
              marginRight: "40px",
            }}
          >
            <Grid
              container
              spacing={{ xs: 1, md: 2 }}
              columns={{ xs: 4, sm: 8, md: 12 }}
            >
              {Array.from(Array(7)).map((_, index) => (
                <Grid item xs={2} sm={4} md={4} key={index}>
          
                  <CustomTypo
                    fontFamily="Poppins"
                    fontWeight="400"
                    fontSize="14px"
                    color="#636363"
                  >
                    First Name
                  </CustomTypo>
                  <CustomTextField border="0px" />
                </Grid>
              ))}
            </Grid>
          </Box>
          <CustomButton padding="14px, 60px, 14px, 61px" margin="40px 0px 58px 40px" width="158px" height="46px">Update</CustomButton>
        </Box>
      </Modal>
    </>
  );
}
