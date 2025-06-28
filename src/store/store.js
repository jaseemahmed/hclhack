import { configureStore } from "@reduxjs/toolkit";
import transactionReducer from "../features/transactions/transactionSlice.js";
import userReducer from "../features/user/userSlice.js";
import portfolioReducer from "../features/portfolio/portfolioSlice";

export const store = configureStore({
  reducer: {
    room: transactionReducer,
    user: userReducer,
  },
  middleware: (getDefaultMiddleWare) =>
    getDefaultMiddleWare({
      serializableCheck: false,
    }),
  portfolio: portfolioReducer,
});
