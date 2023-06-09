import { configureStore } from '@reduxjs/toolkit';
import rootReducer from '../slices/rootReducer';

// Configure the Redux store
export const store = configureStore({
  reducer: rootReducer,
  devTools: true
});

export default store;
