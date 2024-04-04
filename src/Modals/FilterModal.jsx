import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import CustomTypo from "../customComponents/CustomTypo";
import modalClose from "../icons/modalClose.svg";
import { Divider } from "@mui/material";
import CustomTextField from "../customComponents/CustomTextField";
import CustomButton from "../customComponents/CustomButton";
import { useState } from "react";
import {
  validateEmail,
  validateWholesalerId,
  validateLocId,
} from "../validate.js";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "863px",
  height: "461px",
  bgcolor: "#FFFFFF",
  borderRadius: "12px",
};



export default function FilterModal({
  openFilter,
  setOpenFilter,
  handleFilterChange,
  setFilteredData,
}) {
  const handleClose = () => setOpenFilter(false);
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
    setFormData({});
  };
  console.log("gejck f fd", formData);

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
                color="#4D47C3"
                bgColor="none"
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
                defaultValue={formData.lastName}
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
            padding="14px, 60px, 14px, 61px"
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
