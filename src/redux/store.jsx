import { configureStore, createSlice } from '@reduxjs/toolkit';

// import rootReducer from './reducers/reducer';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    authenticated: false
  },
  reducers: {
    connectUser: (state, action) => {
      state.authenticated = true;
    },
    disconnectUser: (state, action) => {
      state.authenticated = false;
    }
  }
});

// Export mes actions
export const { connectUser, disconnectUser } = authSlice.actions;

export const store = configureStore({
  reducer:
    // rootReducer,
    {
      auth: authSlice.reducer
    },
  devTools: true
  // devTools: process.env.NODE_ENV !== 'production'
});

export default store;
