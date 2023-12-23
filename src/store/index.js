import { configureStore } from '@reduxjs/toolkit';
import { formReducer } from './slices/formSlice';
import { contractReducer } from './slices/contractSlice';

const store = configureStore({
  reducer: {
    formReducer,
    contractReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false
  }),
});

export default store;
