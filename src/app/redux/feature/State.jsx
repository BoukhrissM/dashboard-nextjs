"use client";
const initialState = {
  activePage: "Dashboard",
};
const State = (state = initialState, { type, payload }) => {
  switch (type) {
    case "ActivePage":
      return { ...state, activePage: payload };
    default:
      return { ...state };
  }
};

export default State;
