"use client";
import Grid from "@mui/material/Unstable_Grid2";
import { Paper } from "@mui/material";
import { Suspense } from "react";
const data = [
  {
    month: "Jan",
    city: "Tokyo",
    temperature: 7,
  },
  {
    month: "Jan",
    city: "London",
    temperature: 3.9,
  },
  {
    month: "Feb",
    city: "Tokyo",
    temperature: 13,
  },
  {
    month: "Feb",
    city: "London",
    temperature: 4.2,
  },
  {
    month: "Mar",
    city: "Tokyo",
    temperature: 16.5,
  },
  {
    month: "Mar",
    city: "London",
    temperature: 5.7,
  },
  {
    month: "Apr",
    city: "Tokyo",
    temperature: 14.5,
  },
  {
    month: "Apr",
    city: "London",
    temperature: 8.5,
  },
  {
    month: "May",
    city: "Tokyo",
    temperature: 10,
  },
  {
    month: "May",
    city: "London",
    temperature: 11.9,
  },
  {
    month: "Jun",
    city: "Tokyo",
    temperature: 7.5,
  },
  {
    month: "Jun",
    city: "London",
    temperature: 15.2,
  },
  {
    month: "Jul",
    city: "Tokyo",
    temperature: 9.2,
  },
  {
    month: "Jul",
    city: "London",
    temperature: 17,
  },
  {
    month: "Aug",
    city: "Tokyo",
    temperature: 14.5,
  },
  {
    month: "Aug",
    city: "London",
    temperature: 16.6,
  },
  {
    month: "Sep",
    city: "Tokyo",
    temperature: 9.3,
  },
  {
    month: "Sep",
    city: "London",
    temperature: 14.2,
  },
  {
    month: "Oct",
    city: "Tokyo",
    temperature: 8.3,
  },
  {
    month: "Oct",
    city: "London",
    temperature: 10.3,
  },
  {
    month: "Nov",
    city: "Tokyo",
    temperature: 8.9,
  },
  {
    month: "Nov",
    city: "London",
    temperature: 5.6,
  },
  {
    month: "Dec",
    city: "Tokyo",
    temperature: 5.6,
  },
  {
    month: "Dec",
    city: "London",
    temperature: 9.8,
  },
];

export const ChartsDashboard = () => {
  return (
    <Grid container className="h-2/4  w-full py-3" spacing={2}>
      <Grid xs={12} sm={12} md={7} className="h-96">
        <Paper
          elevation={6}
          className="h-full p-3 flex justify-center items-center"
        >
          chart 1
        </Paper>
      </Grid>
      <Grid xs={12} sm={12} md={5} className="h-96">
        <Paper elevation={6} className="h-full  p-3">
          content Chart 2
        </Paper>
      </Grid>
    </Grid>
  );
};
export default ChartsDashboard;
