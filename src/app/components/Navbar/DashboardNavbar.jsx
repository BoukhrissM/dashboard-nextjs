"use client";
import React from "react";
import "./DashboardNavbar.css";
import Grid from "@mui/material/Unstable_Grid2";
import { GoSearch } from "react-icons/go";
import InputBase from "@mui/material/InputBase";
import { IconButton } from "@mui/material";
import { Avatar } from "@mui/material";
import { Drawer } from "@mui/material";
import $ from "jquery";
import { Rotate as Hamburger } from "hamburger-react";
import AsideNavigation from "../AsideNavigation/AsideNavigation";

// const calcWidth = () => {
//   return window.innerWidth < 900;
// };
const DashboardNavbar = () => {
  const [open, setOpen] = React.useState(false);
  const [leftOpen, setLeftOpen] = React.useState(false);
  const [isSmall, setisSmall] = React.useState();
  React.useEffect(() => {
    setisSmall(window.innerWidth < 900);
    window.addEventListener("resize", () => {
      setisSmall(window.innerWidth < 900);
    });
  }, []);
  const handleOpen = () => {
    setOpen(true);
  };
  return (
    <>
      <Grid container spacing={1} className="h-full container">
        <Grid
          xs={12}
          className="h-full flex justify-between items-center gap-4 px-6"
        >
          {isSmall ? (
            <Hamburger toggled={leftOpen} toggle={setLeftOpen} />
          ) : (
            <p className="montserrat text-lg font-bold text-gray-600">
              Dashboard
            </p>
          )}
          <div className="bg-slate-100 rounded-3xl px-3 transition-all hover:scale-105">
            <InputBase
              // sx={{ ml: 1, flex: 1 }}
              placeholder="Search here ..."
              inputProps={{ "aria-label": "search google maps" }}
              style={{ width: "75%" }}
            />
            <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
              <GoSearch />
            </IconButton>
          </div>
          <Avatar
            src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
            amt="boukhriss mohamed"
            className="cursor-pointer transition-all hover:scale-110"
            onClick={handleOpen}
          />
        </Grid>
      </Grid>
      <Drawer
        anchor={"right"}
        open={open}
        // variant="temporary"
      >
        {/* {list(anchor)} */}
        <button onClick={() => setOpen(false)}>close</button>
        <div className="h-8 w-96">
          <p>we say something here</p>
        </div>
      </Drawer>
      <Drawer
        anchor={"left"}
        open={leftOpen}
        // variant="temporary"
      >
        {/* {list(anchor)} */}
        <Hamburger toggled={leftOpen} toggle={setLeftOpen} />
        <div className="h-8 w-72">
          <AsideNavigation />
        </div>
      </Drawer>
    </>
  );
};

export default DashboardNavbar;
