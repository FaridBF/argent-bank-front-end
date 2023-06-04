import { combineReducers } from '@reduxjs/toolkit';
import userSlice from './userSlice';

const rootReducer = combineReducers({
  auth: userSlice
});

export default rootReducer;
