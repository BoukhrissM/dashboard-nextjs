"use client";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { useSelector, useDispatch } from "react-redux";

const ActiveStyle = {
  backgroundColor: "#2C4F85",
  color: "white",
};
const NotActiveStyle = {
  backgroundColor: "transparent",
  color: "#9597AA",
};

const MenuButton = (props) => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  return (
    <Grid
      container
      className={`w-full h-10  rounded-md cursor-pointe  cursor-pointer montserrat ${
        props.value === state.activePage
          ? "shadow-md"
          : "hover:scale-105 transition-all"
      }`}
      fontStyle={
        props.value === state.activePage ? ActiveStyle : NotActiveStyle
      }
      onClick={() => {
        dispatch({ type: "ActivePage", payload: props.value });
      }}
    >
      <Grid xs={2} md={3} className="flex justify-center items-center">
        {props.icon}
      </Grid>
      <Grid md={9} className="flex justify-start items-center">
        {props.value}
      </Grid>
    </Grid>
  );
};

export default MenuButton;
