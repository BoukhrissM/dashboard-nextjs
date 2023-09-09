"use client";
import { configureStore } from "@reduxjs/toolkit";
import State from "../feature/State";
export const Store = configureStore({
  reducer: State,
});


export default Store
