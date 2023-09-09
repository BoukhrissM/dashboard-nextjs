"use client";
import Grid from "@mui/material/Unstable_Grid2";
import { Paper } from "@mui/material";

export const ChartsDashboard = () => {
  return (
    <Grid container className="h-2/4  w-full py-3" spacing={2}>
      <Grid xs={12} sm={12} md={7} className="h-96">
        <Paper elevation={6} className="h-full">content Chart 1</Paper>
      </Grid>
      <Grid xs={12} sm={12} md={5} className="h-96">
        <Paper elevation={6} className="h-full">content Chart 2</Paper>
      </Grid>
    </Grid>
  );
};
export default ChartsDashboard;
