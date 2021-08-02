import {createSlice} from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: 0,
  reducers: {
    increment: (state) => state + 1,
    decrement: (state) => state - 1,
    test: (state, action) => {
      const {testValue} = action.payload;
      console.log(testValue);
    },
  },
});

export const {increment, decrement, test} = counterSlice.actions;

export default counterSlice.reducer;
