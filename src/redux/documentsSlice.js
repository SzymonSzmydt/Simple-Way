import { createSlice } from '@reduxjs/toolkit';

const monthsText = ["styczeń", "luty", "marzec", "kwiecień", "maj", "czerwiec", "lipiec", "sierpień", "wrzesień", "październik", "listopad", "grudzień"];
const monthDigit = new Date().getMonth().toLocaleString();

const initialState = {
  data: [],
  keys: [],
  month: monthsText,
  defaultMonth: monthsText[monthDigit],
  totalMonth: 0
};

export const dataSlice = createSlice({
  name: 'document',
  initialState,
  reducers: {
    reduxData: (state, action) => {
      state.data = action.payload
    },
    reduxKeys: (state, action) => {
      state.keys = Object.keys(action.payload)
    },
    choiceMonth: (state, action) =>  {
      state.defaultMonth = action.payload
    },
    totalMonth: (state, action) => {
      state.totalMonth = action.payload
    }
  }
});

export const { reduxData, reduxKeys, choiceMonth, totalMonth } = dataSlice.actions;
export default dataSlice.reducer;