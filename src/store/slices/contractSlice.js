import { createSlice } from '@reduxjs/toolkit';

const contractSlice = createSlice({
  name: 'contract',
  initialState: {
    contract: null,
    ownAddress: '',
    balance: 0,
    tokenSymbol: ''
  },
  reducers: {
    setInfo(state, action) {
      state.ownAddress = action.payload.accounts[0];
      state.contract = action.payload.contract;
      state.balance = Number(action.payload.balance);
      state.tokenSymbol = action.payload.tokenSymbol;
    },
    setBalance(state, action) {
      state.balance = Number(action.payload);
    }
  }
});

export const contractReducer = contractSlice.reducer;
export const { setInfo, setBalance } = contractSlice.actions;
