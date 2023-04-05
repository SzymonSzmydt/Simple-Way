import { createSlice } from "@reduxjs/toolkit";

const monthsText = [
  "styczeń",
  "luty",
  "marzec",
  "kwiecień",
  "maj",
  "czerwiec",
  "lipiec",
  "sierpień",
  "wrzesień",
  "październik",
  "listopad",
  "grudzień",
];
const monthDigit = new Date().getMonth().toLocaleString();
const initialState = {
  keys: [],
  month: monthsText,
  defaultMonth: monthsText[monthDigit],
  totalMonth: 0,
};
export const dataSlice = createSlice({
  name: "document",
  initialState,
  reducers: {
    reduxKeys: (state, action) => {
      state.keys = Object.keys(action.payload);
    },
    choiceMonth: (state, action) => {
      state.defaultMonth = action.payload;
    },
    totalMonth: (state, action) => {
      state.totalMonth = action.payload;
    },
  },
});
export const { reduxKeys, choiceMonth, totalMonth } = dataSlice.actions;
export default dataSlice.reducer;
