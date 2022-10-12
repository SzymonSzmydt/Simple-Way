import { createSlice } from '@reduxjs/toolkit';

const monthsText = ["styczeń", "luty", "marzec", "kwiecień", "maj", "czerwiec", "lipiec", "sierpień", "wrzesień", "październik", "listopad", "grudzień"];
const monthDigit = new Date().getMonth().toLocaleString();

const initialState = {
    month: monthsText,
    defaultMonth: monthsText[monthDigit],
    totalMonth: 0
}

export const monthSlice = createSlice({
    name: 'months',
    initialState,
    reducers: {
        choiceMonth: (state, action) =>  {
            state.defaultMonth = action.payload
        },
        totalMonth: (state, action) => {
            state.totalMonth = action.payload
        }
    }
});

export const { choiceMonth, totalMonth } = monthSlice.actions;
export const selectMonth = monthSlice.reducer;