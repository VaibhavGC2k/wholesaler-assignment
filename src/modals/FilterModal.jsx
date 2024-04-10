import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import CustomTypo from "../customComponents/CustomTypo.jsx";
import modalClose from "../assets/modalClose.svg";
import { Divider } from "@mui/material";
import CustomTextField from "../customComponents/CustomTextField.jsx";
import CustomButton from "../customComponents/CustomButton.jsx";
import { useState } from "react";
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
  width: "863px",
  height: "500px",
  bgcolor: "#FFFFFF",
  borderRadius: "12px",
};

export default function FilterModal({
  openFilter,
  setOpenFilter,
  handleFilterChange,
  setFilteredData,
}) {
  const handleClose = () => {
    setOpenFilter(false);
    setEmailError(false);
    setWholesalerIdError(false);
  };
  const [formData, setFormData] = useState({});
  const [emailError, setEmailError] = useState(false);
  const [wholesalerIdError, setWholesalerIdError] = useState(false);

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
    }
  };

  const handleClearFilter = () => {
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      wholesalerId: "",
      phoneNumber: "",
    });
    setFilteredData([]);
    setWholesalerIdError(false);
    setEmailError(false);
  };

  const handleSubmit = () => {
    if (emailError || wholesalerIdError) {
      console.log("error");
      return;
    }
    handleFilterChange(formData);
  };
  return (
    <>
      <Modal
        open={openFilter}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box
            sx={{
              marginLeft: "32px",
              marginTop: "17.82px",
              marginBottom: "11.66px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <CustomTypo
              fontFamily="Poppins"
              fontSize="28.52px"
              fontWeight="500"
              color="#000000"
            >
              Filters
            </CustomTypo>

            <Box
              sx={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
              }}
            >
              <CustomButton
                onClick={handleClearFilter}
                variant="outlined"
               
                padding="11px 12px 11px 12px"
               

              >
                Clear Filter
              </CustomButton>

              <Button sx={{ marginRight: "40px" }} onClick={handleClose}>
                <img
                  src={modalClose}
                  alt="modal Close"
                  width="38px"
                  height="38px"
                />
              </Button>
            </Box>
          </Box>
          <Divider
            sx={{
              maxWidth: "833px",
              color: "#505D68",
              margin: "0px 15px 14px 15px",
              borderStyle: "dashed",
            }}
          />
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "flex-start",
              marginTop: "14px",
              marginLeft: "28px",
              columnGap: "27px",
              rowGap: "23px",
            }}
          >
            <Box sx={{}}>
              {" "}
              <CustomTypo
                fontFamily="Poppins"
                fontWeight="400"
                fontSize="14px"
                color="#636363"
              >
                First Name
              </CustomTypo>
              <CustomTextField
                onChange={handleChange}
                value={formData.firstName}
                name="firstName"
                width="377px"
                height="48px"
              />
            </Box>
            <Box sx={{}}>
              {" "}
              <CustomTypo
                fontFamily="Poppins"
                fontWeight="400"
                fontSize="14px"
                color="#636363"
              >
                Last Name
              </CustomTypo>
              <CustomTextField
                value={formData.lastName}
                name="lastName"
                onChange={handleChange}
                width="377px"
                height="48px"
              />
            </Box>
            <Box sx={{}}>
              {" "}
              <CustomTypo
                fontFamily="Poppins"
                fontWeight="400"
                fontSize="14px"
                color="#636363"
              >
                Email ID
              </CustomTypo>
              <CustomTextField
                value={formData.email}
                error={emailError}
                helperText={emailError && "Enter valid Email Id"}
                name="email"
                onChange={handleChange}
                width="377px"
                height="48px"
              />
            </Box>
            <Box sx={{}}>
              {" "}
              <CustomTypo
                fontFamily="Poppins"
                fontWeight="400"
                fontSize="14px"
                color="#636363"
              >
                Phone Number
              </CustomTypo>
              <CustomTextField
                value={formData.phoneNumber}
                name="phoneNumber"
                onChange={handleChange}
                width="377px"
                height="48px"
              />
            </Box>
            <Box sx={{}}>
              {" "}
              <CustomTypo
                fontFamily="Poppins"
                fontWeight="400"
                fontSize="14px"
                color="#636363"
              >
                Wholesaler ID
              </CustomTypo>
              <CustomTextField
                value={formData.wholesalerId}
                error={wholesalerIdError}
                helperText={wholesalerIdError && "Enter valid Wholesaler Id"}
                name="wholesalerId"
                onChange={handleChange}
                width="377px"
                height="48px"
              />
            </Box>
          </Box>

          <CustomButton
            onClick={handleSubmit}
            padding="14px 60px 14px 61px"
            margin="40px 0px 58px 40px"
            width="158px"
            height="46px"
          >
            Continue
          </CustomButton>
        </Box>
      </Modal>
    </>
  );
}
