"use client";
import React from "react";
import "./DashboardNavbar.css";
import Grid from "@mui/material/Unstable_Grid2";
import {GoSearch} from "react-icons/go"
import InputBase from "@mui/material/InputBase"
import { IconButton } from "@mui/material";
import {
  Avatar,
} from "@mui/material";

const DashboardNavbar = () => {
  return (
    <Grid container spacing={1} className="h-full container">
      <Grid
        xs={12}
        className="h-full flex justify-between items-center gap-4 px-6"
      >
        <p className="montserrat text-lg">Dashboard</p>
        <div className="bg-slate-100 rounded-3xl my-2 px-3 transition-all hover:scale-105">
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Search here ..."
            inputProps={{ "aria-label": "search google maps" }}
          />
          <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
            <GoSearch />
          </IconButton>
        </div>
        <Avatar
          src="https://i.pravatar.cc/150?u=a042581f4e29026024sd"
          amt="boukhriss mohamed"
          className="cursor-pointer transition-all hover:scale-110"
        />
      </Grid>
    </Grid>
  );
};

export default DashboardNavbar;
