import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  id: null,
  email: '',
  firstName: '',
  lastName: '',
  token: undefined,
  error: false,
  errorMessage: '',
  isConnected: false
};

/**
 * Redux slice for managing user-related state.
 */
export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    signIn: (state, action) => {
      state.token = action.payload.token;
      state.isConnected = true;
      state.error = false;
    },
    signUp: (state, action) => {
      state.token = action.payload.token;
      state.error = false;
    },
    logOut: () => initialState,
    getProfile: (state, action) => {
      state.email = action.payload.email;
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.id = action.payload.id;
    },
    editProfile: (state, action) => {
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
    },
    showError: (state, action) => {
      state.error = true;
      state.errorMessage = action.payload.errorMessage;
    }
  }
});

// Export the action creators
export const { signIn, signUp, showError, getProfile, editProfile, logOut } =
  userSlice.actions;
export default userSlice.reducer;
