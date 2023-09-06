"use client";
import Grid from "@mui/material/Unstable_Grid2/Grid2";

const ActiveStyle = {
  backgroundColor: "#2C4F85",
  color: "white",
};
const NotActiveStyle = {
  backgroundColor: "transparent",
  color: "#9597AA",
};

const MenuButton = (props) => {
  return (
    <Grid
      container
      className={`w-full h-10  rounded-md cursor-pointe  my-2 cursor-pointer montserrat ${
        props.active ? "shadow-md" : "hover:scale-105 transition-all"
      }`}
      fontStyle={!props.active ? NotActiveStyle : ActiveStyle}
    >
      <Grid md={3} className="flex justify-center items-center">
        {props.icon}
      </Grid>
      <Grid md={9} className="flex justify-start items-center">
        {props.value}
      </Grid>
    </Grid>
  );
};

export default MenuButton;
