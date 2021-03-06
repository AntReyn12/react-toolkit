import {createSlice} from "@reduxjs/toolkit";

const testSlice = createSlice({
  name: "counter",
  initialState: 0,
  reducers: {
    increment: (state) => state + 1,
    decrement: (state) => state - 1,
  },
});

export const {increment, decrement} = testSlice.actions;

export default testSlice.reducer;
