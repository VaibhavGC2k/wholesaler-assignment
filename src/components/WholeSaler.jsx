import { Box, Button, Divider, Pagination, Stack } from "@mui/material";
import React from "react";
import CustomTypo from "../customComponents/CustomTypo";
import CustomButton from "../customComponents/CustomButton";
import funnel from "../icons/funnel.png";
import WholesalerTable from "./WholesalerTable";
import AddModal from "../Modals/AddModal";
import { useState } from "react";
import FilterModal from "../Modals/FilterModal";
import wholesalers from "../data/wholesalers";

export default function WholeSaler() {
  const [pageNo, setPageNo] = useState(1);
  const [filteredData, setFilteredData] = useState([]);
  const [open, setOpen] = useState(false);
  const [openFilter, setOpenFilter] = useState(false);
  const handleChange = (event, value) => {
    setPageNo(value);
  };
  const [data, setData] = useState(wholesalers);

  const handleFilterChange = (user) => {
    setFilteredData([user]);
  };

  return (
    <>
      <Box sx={{ marginTop: "128px", marginLeft: "33px" }}>
        <Box sx={{ marginLeft: "30px" }}>
          <CustomTypo
            fontWeight="600"
            fontSize="20px"
            color="#4D47C3"
            fontFamily="Montserrat"
          >
            Wholesalers
          </CustomTypo>
        </Box>
        <Box sx={{ marginLeft: "1281px", marginTop: "13px" }}>
          <CustomButton
            width="82px"
            height="36px"
            onClick={() => setOpen(true)}
          >
            Add
          </CustomButton>
          <Button
            onClick={() => {
              setOpenFilter(true);
            }}
            sx={{
              maxWidth: "124px",
              maxHeight: "36px",
              borderRadius: "6px",
              gap: "10px",
              backgroundColor: "#4D47C3",
              color: "#FFFFFF",
              marginLeft: "28px",
              padding: "9px, 25px, 9px, 25px",
              textTransform: "capitalize",
            }}
          >
            <img src={funnel} alt="funnel" width="18px" height="15.3px" />
            Filters
          </Button>
        </Box>
        <Divider
          sx={{
            minWidth: "1566px",
            color: "#CACACA",
            marginTop: "26px",
          }}
        />
        <WholesalerTable
          pageNo={pageNo}
          data={data}
          setData={setData}
          filteredData={filteredData}
          
        />
        <Box sx={{ display: "flex", justifyContent: "flex-start" }}>
          <Box
            sx={{
              marginTop: "265px",
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-start",
              justifyContent: "space-between",
            }}
          >
            <CustomTypo
              fontFamily="Poppins"
              fontWeight="400px"
              fontSize="14px"
              color="#696969"
            >
              Page : {pageNo}
            </CustomTypo>
            <Box sx={{ marginLeft: "539px" }}>
              <Stack>
                <Pagination
                  count={Math.ceil(data.length / 6)}
                  variant="outlined"
                  color="primary"
                  onChange={handleChange}
                  sx={{
                    "& .Mui-selected": {
                      color: "#FFFFF",
                      bgcolor:"4D47C3"
                    },
                    "& .MuiPaginationItem-root": {
                      border: "1px solid grey",
                      mr: "16px",
                      "&:hover": {
                        bgcolor: "#4D47C3",
                        color: "#FFFFFF"
                      },
                    },
                  }}
                />
              </Stack>
            </Box>
          </Box>
        </Box>
      </Box>
      <AddModal open={open} setOpen={setOpen} setData={setData} data={data} />
     {
      filteredData && 
     <FilterModal
        openFilter={openFilter}
        setOpenFilter={setOpenFilter}
        setData={setData}
        handleFilterChange={handleFilterChange}
        setFilteredData={setFilteredData}
      />
     }
    </>
  );
}
