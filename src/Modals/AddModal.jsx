import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import CustomTypo from "../customComponents/CustomTypo";
import modalClose from "../icons/modalClose.svg";
import { Divider, Grid, MenuItem, Select, TextField } from "@mui/material";
import CustomTextField from "../customComponents/CustomTextField";
import CustomButton from "../customComponents/CustomButton";
import { useState } from "react";
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

export default function AddModal({ open, setOpen }) {
  const handleClose = () => setOpen(false);
  const [selectedValue, setSelectedValue] = useState();
  const formsData = new FormData();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    wholesalerId: "",
    role: "",
    locId: "",
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    console.log(formsData);
  };
  const handleFormSubmit = () => {
    console.log(formsData.get());
    // setFormData({
    //   ...formData,
    // });
  };
  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box
            sx={{
              marginLeft: "58px",
              marginTop: "31px",
              marginBottom: "29px",
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
              Add Wholesaler
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
              <form onSubmit={handleFormSubmit}>
                {Array.from(Array(7)).map((_, index) => (
                  <Grid item xs={12} sm={6} md={4} key={index}>
                    {index < 5 ? (
                      <>
                        <CustomTypo
                          fontFamily="Poppins"
                          fontWeight="400"
                          fontSize="14px"
                          color="#636363"
                        >
                          {index === 0 && "First Name"}
                          {index === 1 && "Last Name"}
                          {index === 2 && "Email ID"}
                          {index === 3 && "Phone Number"}
                          {index === 4 && "Wholesaler ID"}
                        </CustomTypo>
                        <TextField
                          onChange={handleChange}
                          InputLabelProps={{
                            shrink: true,
                          }}
                          InputProps={{
                            style: {
                              borderRadius: "6px",
                              borderColor: "#F0EFFF",
                              width: "447px",
                              height: "62px",
                              backgroundColor: "#F0EFFF",
                              fontFamily: "Poppins !important",
                            },
                          }}
                        />
                      </>
                    ) : index === 5 ? (
                      <>
                        <CustomTypo
                          fontFamily="Poppins"
                          fontWeight="400"
                          fontSize="14px"
                          color="#636363"
                        >
                          Role
                        </CustomTypo>

                        <Select
                          value={selectedValue}
                          onChange={handleChange}
                          name="Role"
                          variant="outlined"
                          style={{
                            marginTop: "8px",
                            width: "447px",
                            height: "62px",
                            backgroundColor: "#F0EFFF",
                            borderColor: "#F0EFFF",
                            borderRadius: "6px",
                          }}
                        >
                          <MenuItem value="SUPER_ADMIN">SUPER_ADMIN</MenuItem>
                          <MenuItem value="ADMIN">ADMIN</MenuItem>
                          <MenuItem value="DEVELOPER">DEVELOPER</MenuItem>
                          <MenuItem value="MANAGER">MANAGER</MenuItem>
                          <MenuItem value="TESTER">TESTER</MenuItem>
                        </Select>
                      </>
                    ) : (
                      <>
                        <CustomTypo
                          fontFamily="Poppins"
                          fontWeight="400"
                          fontSize="14px"
                          color="#636363"
                        >
                          {index === 6 && "LocId"}
                        </CustomTypo>
                        <TextField
                          onChange={handleChange}
                          InputLabelProps={{
                            shrink: true,
                          }}
                          InputProps={{
                            style: {
                              borderRadius: "6px",
                              borderColor: "#F0EFFF",
                              width: "447px",
                              height: "62px",
                              backgroundColor: "#F0EFFF",
                              fontFamily: "Poppins !important",
                            },
                          }}
                        />
                      </>
                    )}
                  </Grid>
                ))}
              </form>
            </Grid>
          </Box>
          <CustomButton
            onClick={handleFormSubmit}
            padding="14px, 60px, 14px, 61px"
            margin="40px 0px 58px 40px"
            width="158px"
            height="46px"
          >
            Add
          </CustomButton>
        </Box>
      </Modal>
    </>
  );
}
