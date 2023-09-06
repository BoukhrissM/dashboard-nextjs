"use client";
import eschool from "@/app/assets/school.png";
import Image from "next/image";
import { useState } from "react";
import "./AsideNavigation.css";
import { AiOutlineDashboard } from "react-icons/ai";
import { PiStudentDuotone, PiExamLight } from "react-icons/pi";
import {TfiSettings} from "react-icons/tfi"
import {SiGoogleclassroom} from "react-icons/si"
import {BsPeople} from "react-icons/bs";
import {GiTakeMyMoney} from "react-icons/gi"
import MenuButton from "../MenuButton/MenuButton";
import PremiumPack from "../PremiumPack/PremiumPack";

export default function AsideNavigation() {
    const [activeMenu ,setActiveMenu] = useState("dashboard")
  return (
    <div className="w-full h-full flex flex-col">
      <div className="logo-area w-100 h-20 flex justify-center items-center font-bold px-5">
        <Image src={eschool} height={56} />
        <span>E-School</span>
      </div>
      <div className="Navigations-area pt-16 px-5">
        <MenuButton icon={<AiOutlineDashboard />} value="Dashboard" active />
        <MenuButton icon={<PiStudentDuotone />} value="Students" />
        <MenuButton icon={<BsPeople />} value="Teachers" />
        <MenuButton icon={<SiGoogleclassroom />} value="Classes" />
        <MenuButton icon={<PiExamLight />} value="Exams" />
        <MenuButton icon={<GiTakeMyMoney />} value="Payment" />
        <MenuButton icon={<TfiSettings />} value="Settings" />
      </div>
      <div className="premium-area px-5 my-5">
        <PremiumPack />
      </div>
    </div>
  );
}
