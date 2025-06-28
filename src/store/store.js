// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import transactionReducer from '../features/transactions/transactionSlice';
import portfolioReducer from '../features/portfolio/portfolioSlice';

export const store = configureStore({
  reducer: {
    room: transactionReducer,
    portfolio: portfolioReducer,
  },
});
