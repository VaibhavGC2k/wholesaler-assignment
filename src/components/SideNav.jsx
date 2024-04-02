import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Navbar from "./Navbar";
import CustomTypo from "../customComponents/CustomTypo";
import { IconButton, ListItemButton } from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { useState } from "react";
import WholeSaler from "./WholeSaler";

const drawerWidth = 282;

export default function SideNav() {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (index) => {
    setSelectedItem(index);
  };
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <Navbar />
        <Drawer
          variant="permanent"
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: {
              width: drawerWidth,
              boxSizing: "border-box",
            },
          }}
        >
          <Box
            sx={{
              overflow: "auto",
              marginTop: "90px",
            }}
          >
            <List>
              {["Users", "Roles", "Companies", "Wholesalers"].map(
                (text, index) => (
                  <ListItem key={text} disablePadding>
                    <ListItemButton
                      onClick={() => handleItemClick(index)}
                      sx={{
                        backgroundColor:
                          selectedItem === index ? "#4D47C3" : "transparent",
                        "&:hover": {
                          background: "#4D47C3",
                        },
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          width: "100%",
                        }}
                      >
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                          }}
                        >
                          <Box
                            sx={{
                              width: "18px",
                              height: "18px",
                              borderRadius: "5px",
                              backgroundColor:
                                selectedItem === index ? "#FFFFFF" : "#4D47C3",
                              marginRight: "17px",
                            }}
                          ></Box>

                          <CustomTypo
                            fontFamily="Poppins"
                            fontSize="24x"
                            fontWeight="400"
                            color={
                              selectedItem === index ? "#FFFFFF" : "#151515"
                            }
                          >
                            {text}
                          </CustomTypo>
                        </Box>
                        <Box>
                          <IconButton>
                            <KeyboardArrowRightIcon
                              sx={{
                                color:
                                  selectedItem === index
                                    ? "#FFFFFF"
                                    : "#4D47C3",
                              }}
                            />
                          </IconButton>
                        </Box>
                      </Box>
                    </ListItemButton>
                  </ListItem>
                )
              )}
            </List>
          </Box>
        </Drawer>
        <WholeSaler/>
      </Box>
    </>
  );
}
