import AsideNavigation from "../components/AsideNavigation/asideNavigation";
import DashboardNavbar from "../components/Navbar/DashboardNavbar";
import Grid from "@mui/material/Unstable_Grid2";
import { Suspense } from "react";
import {Paper} from "@mui/material";

export const metadata = {
  title: "Dashboard | E-School",
};

const dashboardLayout = ({ children }) => {
  return (
    <Suspense fallback={<div>loading</div>}>
      <Grid container>
        <Grid xs={0} md={2} className="bg-white">
          <AsideNavigation />
        </Grid>
        <Grid xs={12} md={10} className="h-screen bg-gray-50">
          <Grid xs={12} className="bg-white h-16">
            <DashboardNavbar />
          </Grid>
          <Grid
            xs={12}
            style={{ height: "90%" }}
            className="overflow-y-scroll shadow-inner"
          >
            {/* <Paper elevation={0} className="h-full"> */}
            {children}
            {/* </Paper> */}
          </Grid>
        </Grid>
      </Grid>
    </Suspense>
  );
};

export default dashboardLayout;
