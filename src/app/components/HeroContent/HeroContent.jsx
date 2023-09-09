"use client";

import React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import StatsItem from "../StatsItem/StatsItem";
import { PiStudentFill, PiOption } from "react-icons/pi";
import { FaChalkboardTeacher } from "react-icons/fa";
import { GiReceiveMoney } from "react-icons/gi";
import { Suspense } from "react";
import { Skeleton } from "@mui/material";
const HeroContent = () => {
  return (
    <Suspense
      // pour avoir du skeleton  en cas de retard du chargement de données d'après api fetsh
      fallback={
        <Skeleton
          sx={{ bgcolor: "grey.900" }}
          variant="rectangular"
          width={210}
          height={118}
        />
      }
    >
      <Grid container className="w-full" spacing={2}>
        <StatsItem
          icon={<PiStudentFill className="text-5xl text-indigo-900" />}
          iconbg={"bg-indigo-200"}
          description={"Students"}
          number={"13283"}
          numberColor={"text-indigo-900"}
        />
        <StatsItem
          icon={<FaChalkboardTeacher className="text-5xl text-green-900" />}
          iconbg={"bg-green-200"}
          description={"Teachers"}
          number={"142"}
          numberColor={"text-green-900"}
        />
        <StatsItem
          icon={<PiOption className="text-5xl text-yellow-900" />}
          iconbg={"bg-yellow-200"}
          description={"Options"}
          number={"3"}
          numberColor={"text-yellow-900"}
        />
        <StatsItem
          icon={<GiReceiveMoney className="text-5xl text-teal-900" />}
          iconbg={"bg-teal-200"}
          description={"Income"}
          number={"398490 $"}
          numberColor={"text-teal-900"}
        />
        
      </Grid>
    </Suspense>
  );
};

export default HeroContent;
