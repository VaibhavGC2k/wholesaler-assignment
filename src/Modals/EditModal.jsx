import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import CustomTypo from "../customComponents/CustomTypo";
import modalClose from "../icons/modalClose.svg";
import { Divider, Grid, MenuItem, Select } from "@mui/material";
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

export default function EditModal({
  openEdit,
  setOpenEdit,
  id,
  setData: setWholeData,
  data: wholeData,
}) {
  const handleClose = () => setOpenEdit(false);
  const [formData, setFormData] = useState(
    wholeData.find((obj) => obj.wholesalerId == id)
  );
  const [data, setData] = useState(
    wholeData.find((obj) => obj.wholesalerId == id)
  );

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFormSubmit = () => {
    console.log(wholeData,formData);
    const index = wholeData.findIndex(item => item.wholesalerId === formData.wholesalerId);
    console.log(index,"this is index")
    if (index !== -1) {
      wholeData[index] = formData;
    } else {
      console.log("No object found with the provided wholesalerId.");
    }
    setWholeData(wholeData)
    handleClose();
  };

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
                        {index === 2 && "Email"}
                        {index === 3 && "Phone Number"}
                        {index === 4 && "Wholesaler ID"}
                      </CustomTypo>
                      <CustomTextField
                        name={
                          (index === 0 && "firstName") ||
                          (index === 1 && "lastName") ||
                          (index === 2 && "email") ||
                          (index === 3 && "phoneNumber") ||
                          (index === 4 && "wholesalerId")
                        }
                        disabled={index === 4 && true}
                        onChange={handleChange}
                        border="0px"
                        defaultValue={
                          (index === 0 && data["firstName"]) ||
                          (index === 1 && data["lastName"]) ||
                          (index === 2 && data["email"]) ||
                          (index === 3 && data["phoneNumber"]) ||
                          (index === 4 && data["wholesalerId"])
                        }
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
                        defaultValue={data["Role"]}
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
                      <CustomTextField
                        name={index === 6 && "LocId"}
                        onChange={handleChange}
                        border="0px"
                        defaultValue={data["LocId"]}
                      />
                    </>
                  )}
                </Grid>
              ))}
            </Grid>
          </Box>
          <CustomButton
            onClick={handleFormSubmit}
            padding="14px, 60px, 14px, 61px"
            margin="40px 0px 58px 40px"
            width="158px"
            height="46px"
          >
            Update
          </CustomButton>
        </Box>
      </Modal>
    </>
  );
}
