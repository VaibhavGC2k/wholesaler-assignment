import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import modalClose from "../assets/modalClose.svg";
import CustomTypo from "../customComponents/CustomTypo";
import { Modal, Box, Button, Divider } from "@mui/material";
import PositionedSnackbar from "../components/Snackbar";
import CustomButton from "../customComponents/CustomButton";
import {
  validateEmail,
  validateWholesalerId,
  validateLocId,
} from "../utils/validate.js";


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

const InitialFormData = {
  firstName: "",
  lastName: "",
  email: "",
  phoneNumber: "",
  wholesalerId: "",
  role: "",
  LocId: "",
};

export default function AddModal({ open, setOpen, setData, data }) {
  const handleClose = () => setOpen(false);
  const [selectedValue] = useState();
  const [snackbarMessage, setSnackbarMessage] = useState(false);
  const [formData, setFormData] = useState(InitialFormData);
  const [emailError, setEmailError] = useState(false);
  const [wholesalerIdError, setWholesalerIdError] = useState(false);
  const [LocIdError, setLocIdError] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    
    if (name === "email") {
      const isValidEmail = validateEmail(value);
      setEmailError(!isValidEmail);
    } else if (name === "wholesalerId") {
      const isValidateWholesalerId = validateWholesalerId(value);
      setWholesalerIdError(!isValidateWholesalerId);
    } else if (name === "LocId") {
      const isLocId = validateLocId(value);
      setLocIdError(!isLocId);
    }
  };

  const handleFormSubmit = () => {
    try {
      if (emailError || wholesalerIdError || LocIdError) {
        throw new Error("Validation Error");
      } else {
        const isEmpty =
          formData.LocId === "" ||
          formData.firstName === "" ||
          formData.lastName === "" ||
          formData.wholesalerId === "" ||
          formData.email === "" ||
          formData.phoneNumber === "" ||
          formData.role === "";
        if (isEmpty) {
          throw new Error("Form is Empty");
        } else {
          setData([...data, formData]);
          setFormData(InitialFormData);
          handleClose();
          setSnackbarMessage(true);
        }
      }
    } catch (error) {
      console.log(error.message);
    }
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
                        {index === 0 && "first Name"}
                        {index === 1 && "Last Name"}
                        {index === 2 && "Email "}
                        {index === 3 && "Phone Number"}
                        {index === 4 && "Wholesaler ID"}
                      </CustomTypo>
                      <TextField
                        required="true"
                        name={
                          (index === 0 && "firstName") ||
                          (index === 1 && "lastName") ||
                          (index === 2 && "email") ||
                          (index === 3 && "phoneNumber") ||
                          (index === 4 && "wholesalerId")
                        }
                        error={
                          (index === 2 && emailError) ||
                          (index === 4 && wholesalerIdError)
                        }
                        helperText={
                          (index === 2 &&
                            emailError &&
                            "Enter valid Email Id") ||
                          (index === 4 &&
                            wholesalerIdError &&
                            "Enter valid Wholesaler Id")
                        }
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
                        name="role"
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
                        error={LocIdError}
                        helperText={LocIdError && "Enter valid Loc ID"}
                        name="LocId"
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
            </Grid>
          </Box>
          <CustomButton
            onClick={handleFormSubmit}
            padding="14px 60px 14px 61px"
            margin="40px 0px 58px 40px"
            width="158px"
            height="46px"
          >
            Add
          </CustomButton>
        </Box>
      </Modal>
      <PositionedSnackbar
        snackbarOpen={snackbarMessage}
        setSnackbarMessage={setSnackbarMessage}
        message={"The Wholesaler has been added successfully!"}
      />
    </>
  );
}