import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  transactions: [],
};

const transactionSlice = createSlice({
  name: 'transaction',
  initialState,
  reducers: {
    addTransaction(state, action) {
      state.transactions.push(action.payload);
    },
  },
});

// Export actions (optional)
export const { addTransaction } = transactionSlice.actions;

// ✅ Export reducer as default
export default transactionSlice.reducer;
