import { combineReducers } from '@reduxjs/toolkit';

import userSlice from './userSlice';

/**
 * Root reducer function.
 * Combines multiple reducers into a single root reducer.
 * @returns {Object} Combined reducer
 */
const rootReducer = combineReducers({
  user: userSlice
});

export default rootReducer;
