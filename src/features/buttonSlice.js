import { createSlice } from "@reduxjs/toolkit";

const buttonSlice = createSlice({
  name: "buttons",
  initialState: ["dark", "light"],
  reducers: {},
});

export const selectButtons = (state) => state.buttons; // Selector to get button state
export default buttonSlice.reducer; // Export the reducer
