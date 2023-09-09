import Grid from "@mui/material/Unstable_Grid2"
import { Paper } from "@mui/material";


const StatsItem = (props) => {
  return (
    <Grid xs={12} sm={6} md={3}>
      <Paper elevation={3} className="h-32 flex flex-row">
        <div className=" w-6/12 flex justify-start px-2 sm:justify-center items-center ">
          <div
            class={`w-24 h-24 ${props.iconbg} rounded-full flex justify-center items-center`}
          >
            {props.icon}
          </div>
        </div>
        <div className=" w-6/12 flex flex-col justify-center items-end px-3">
          <p className="montserrat text-lg text-gray-500 font-bold">
            {props.description}
          </p>
          <span
            className={`font-sans text-2xl font-extrabold ${props.numberColor}`}
          >
            {props.number}
          </span>
        </div>
      </Paper>
    </Grid>
  );
}

export default StatsItem