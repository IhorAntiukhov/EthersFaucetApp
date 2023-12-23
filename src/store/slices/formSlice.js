import { createSlice } from '@reduxjs/toolkit';
import { setBalance } from './contractSlice';

const formSlice = createSlice({
  name: 'main',
  initialState: {
    isLoading: false,
    useOwnAddress: false,
    address: '',
    amount: ''
  },
  reducers: {
    startLoading(state) {
      state.isLoading = true;
    },
    setUseOwnAddress(state, action) {
      state.useOwnAddress = action.payload.target.checked;
    },
    setAddress(state, action) {
      state.address = action.payload.target.value;
    },
    setAmount(state, action) {
      state.amount = action.payload.target.value;
    },
  },
  extraReducers(builder) {
    builder.addCase(setBalance, (state) => {
      state.isLoading = false;
    });
  }
});

export const formReducer = formSlice.reducer;
export const { startLoading, setUseOwnAddress, setAddress, setAmount } = formSlice.actions;
