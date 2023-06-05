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
      console.log('signin reducer:', action);
      state.token = action.payload.token;
      state.isConnected = true;
      state.error = false;
      console.log('state.token', state.token);
    },
    signUp: (state, action) => {
      state.token = action.payload.token;
      state.isConnected = false;
      state.error = false;
    },
    showError: (state, action) => {
      state.error = true;
      state.errorMessage = action.payload.errorMessage;
    }
  }
});

//export des mes actions
export const { signIn, signUp, showError } = userSlice.actions;
export default userSlice.reducer;
