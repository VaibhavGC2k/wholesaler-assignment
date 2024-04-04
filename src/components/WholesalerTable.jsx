import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import CustomTypo from "../customComponents/CustomTypo";
import DeleteModal from "../Modals/DeleteModal";
import { Button } from "@mui/material";
import editIcon from "../icons/Edit.png";
import deleteIcon from "../icons/Delete.png";
import { useState } from "react";
import EditModal from "../Modals/EditModal";

export default function WholesalerTable({
  pageNo,
  data = [],
  setData,
  filteredData,
}) {
  const [openDelete, setOpenDelete] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [matched, setMatched] = useState([]);
  const [Id, setId] = useState();
  const handleDelete = (id) => {
    setId(id);
  };

  console.log(filteredData, data, "filtered data");
  const compareObjects = (obj1, obj2) => {
    // Compare specific properties
    return (
      obj1.firstName === obj2.firstName ||
      obj1.lastName === obj2.lastName ||
      obj1.email === obj2.email ||
      obj1.phoneNumber === obj2.phoneNumber ||
      obj1.wholesalerId === obj2.wholesalerId
    );
  };

  // Find matching objects
  const matchedObjects = data.filter((dataObj) => {
    return filteredData.some((filteredObj) =>
      compareObjects(filteredObj, dataObj)
    );
  });
  console.log(matchedObjects,"matched Data")

  return (
    <>
      <Table
        sx={{ marginTop: "36px", maxWidth: "1491px" }}
        className="wholesalerTable"
      >
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
        <TableBody
          sx={{
            "& tr:last-child": {
              border: "none",
            },
          }}
        >
          {matchedObjects.length
            ? matchedObjects
                .slice((pageNo - 1) * 6, (pageNo - 1) * 6 + 6)
                .map((row) => (
                  <TableRow
                    key={row.wholesalerId}
                    sx={{
                      backgroundColor: "#F0EFFF",
                      borderBottom: "21px solid #FFFFFF",
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
                      <Button
                        onClick={() => {
                          handleDelete(row.wholesalerId);
                          setOpenEdit(true);
                        }}
                      >
                        <img src={editIcon} alt="edit" />
                      </Button>
                      <Button
                        onClick={() => {
                          handleDelete(row.wholesalerId);
                          setOpenDelete(true);
                        }}
                      >
                        <img src={deleteIcon} alt="delete" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))
            : data.slice((pageNo - 1) * 6, (pageNo - 1) * 6 + 6).map((row) => (
                <TableRow
                  key={row.name}
                  sx={{
                    backgroundColor: "#F0EFFF",
                    borderBottom: "21px solid #FFFFFF",
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
                    <Button
                      onClick={() => {
                        handleDelete(row.wholesalerId);
                        setOpenEdit(true);
                      }}
                    >
                      <img src={editIcon} alt="edit" />
                    </Button>
                    <Button
                      onClick={() => {
                        handleDelete(row.wholesalerId);
                        setOpenDelete(true);
                      }}
                    >
                      <img src={deleteIcon} alt="delete" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
        </TableBody>
      </Table>
      {openEdit && (
        <EditModal
          openEdit={openEdit}
          setOpenEdit={setOpenEdit}
          id={Id}
          setData={setData}
          data={data}
        />
      )}
      <DeleteModal
        openDelete={openDelete}
        setOpenDelete={setOpenDelete}
        id={Id}
        setData={setData}
        data={data}
      />
    </>
  );
}
