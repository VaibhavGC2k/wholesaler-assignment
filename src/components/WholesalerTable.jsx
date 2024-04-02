import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import CustomTypo from "../customComponents/CustomTypo";
import wholesalersData from "../data/wholesalers";
import { Box, Button } from "@mui/material";
import editIcon from "../icons/Edit.png";
import deleteIcon from "../icons/Delete.png";

export default function WholesalerTable() {
  return (
    <Table sx={{ marginTop: "36px", maxWidth: "1491px" }}>
      <TableHead>
        <TableRow>
          <TableCell>
            <CustomTypo
              fontFamily="Poppins"
              fontWeight="300"
              fontSize="14px"
              color="#151515
"
            >
              First Name
            </CustomTypo>
          </TableCell>

          <TableCell>
            <CustomTypo
              fontFamily="Poppins"
              fontWeight="300"
              fontSize="14px"
              color="#151515
"
            >
              Last Name
            </CustomTypo>
          </TableCell>

          <TableCell>
            <CustomTypo
              fontFamily="Poppins"
              fontWeight="300"
              fontSize="14px"
              color="#151515
"
            >
              Email ID
            </CustomTypo>
          </TableCell>

          <TableCell>
            <CustomTypo
              fontFamily="Poppins"
              fontWeight="300"
              fontSize="14px"
              color="#151515
"
            >
              Phone Number
            </CustomTypo>
          </TableCell>

          <TableCell>
            <CustomTypo
              fontFamily="Poppins"
              fontWeight="300"
              fontSize="14px"
              color="#151515
"
            >
              Wholesaler ID
            </CustomTypo>
          </TableCell>

          <TableCell>
            <CustomTypo
              fontFamily="Poppins"
              fontWeight="300"
              fontSize="14px"
              color="#151515
"
            >
              Actions
            </CustomTypo>
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {wholesalersData.map((row) => (
 
            <TableRow
              key={row.name}
              sx={{
                backgroundColor: "#F0EFFF",
              }}
            >
              <TableCell>
                <CustomTypo
                  fontFamily="Poppins"
                  fontWeight="400"
                  fontSize="15px"
                  color="#151515"
                >
                  {row.firstName}
                </CustomTypo>
              </TableCell>
              <TableCell>
                <CustomTypo
                  fontFamily="Poppins"
                  fontWeight="400"
                  fontSize="15px"
                  color="#151515"
                >
                  {row.lastName}
                </CustomTypo>
              </TableCell>
              <TableCell>
                <CustomTypo
                  fontFamily="Poppins"
                  fontWeight="400"
                  fontSize="15px"
                  color="#151515"
                >
                  {row.email}
                </CustomTypo>
              </TableCell>
              <TableCell>
                <CustomTypo
                  fontFamily="Poppins"
                  fontWeight="400"
                  fontSize="15px"
                  color="#151515"
                >
                  {row.phoneNumber}
                </CustomTypo>
              </TableCell>
              <TableCell>
                <CustomTypo
                  fontFamily="Poppins"
                  fontWeight="400"
                  fontSize="15px"
                  color="#151515"
                >
                  {row.wholesalerId}
                </CustomTypo>
              </TableCell>
              <TableCell sx={{ padding: "0px" }}>
                <Button>
                  <img src={editIcon} alt="edit" />
                </Button>
                <Button>
                  <img src={deleteIcon} alt="delete" />
                </Button>
              </TableCell>
            </TableRow>
  
        ))}
      </TableBody>
    </Table>
  );
}
