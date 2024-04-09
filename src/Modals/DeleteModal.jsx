import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import CustomTypo from "../customComponents/CustomTypo";
import modalClose from "../icons/modalClose.svg";
import { Divider, Grid } from "@mui/material";
import CustomTextField from "../customComponents/CustomTextField";
import CustomButton from "../customComponents/CustomButton";
import { DragHandleRounded } from "@mui/icons-material";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "417px",
  height: "249px",
  bgcolor: "#FFFFFF",
  borderRadius: "17px",
};

export default function DeleteModal({
  openDelete,
  setOpenDelete,
  id,
  setData,
  data,
}) {
  const handleClose = () => setOpenDelete(false);
  const handleDelete = () => {
    setData(data.filter((obj) => obj.wholesalerId !== id));
    handleClose();
  };
  return (
    <>
      <Modal
        open={openDelete}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box
            sx={{
              marginLeft: "35px",
              marginTop: "27px",
              marginBottom: "19px",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <CustomTypo
              fontFamily="Montserrat"
              fontSize="24px"
              fontWeight="600"
              color="#424B5A"
            >
              Delete
            </CustomTypo>
          </Box>
          <Divider
            sx={{ maxWidth: "397px", color: "#CACACA", marginLeft: "10px" }}
          />
          <Box
            sx={{
              margin: "20px 35px 24px 35px",
              maxWidth: "347px",
              maxHeight: "48px",
            }}
          >
            <CustomTypo
              fontFamily="Montserrat"
              fontSize="16px"
              fontWeight="500"
              color="#424B5A"
            >
              Are you sure you want to delete this Wholesaler?
            </CustomTypo>
          </Box>
          <Box
            sx={{
              maxWidth: "348px",
              maxHeight: "44px",
              display: "flex",
              margin: "0px 34px 38px 35px",
              justifyContent: "space-around",
            }}
          >
            <CustomButton
              onClick={() => setOpenDelete(false)}
              maxWidth="160px"
              maxHeight="44px"
              padding="13px 54px 13px 54px"
              bgColor="#E6E6E6"
              color="#4D47C3"
            >
              Cancel
            </CustomButton>
            <CustomButton
              maxWidth="160px"
              maxHeight="44px"
              onClick={handleDelete}
            >
              Yes Delete!
            </CustomButton>
          </Box>
        </Box>
      </Modal>
    </>
  );
}
