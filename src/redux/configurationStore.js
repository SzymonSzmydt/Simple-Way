import { configureStore } from '@reduxjs/toolkit';
import dataSliceReducer from './documentsSlice';

export const store = configureStore({
  reducer: {
    document: dataSliceReducer
  },
})