import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  /* état initial */
  id: null,
  email: '',
  firstName: '',
  lastName: '',
  token: undefined,
  error: false,
  errorMessage: '',
  isConnected: false
};

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
      state.isConnected = false;
      state.error = false;
    },
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

//export des mes actions
export const { signIn, signUp, showError, getProfile, editProfile } =
  userSlice.actions;
export default userSlice.reducer;
