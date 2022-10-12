import { configureStore } from '@reduxjs/toolkit';
import dataSliceReducer from './documentsSlice';
import { selectMonth } from './monthSlice';

export const store = configureStore({
  reducer: {
    document: dataSliceReducer,
    months: selectMonth
  },
})