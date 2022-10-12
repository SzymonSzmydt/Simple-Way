import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: {},
  keys: []
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
    }
  }
});

export const { reduxData, reduxKeys } = dataSlice.actions;
export default dataSlice.reducer;