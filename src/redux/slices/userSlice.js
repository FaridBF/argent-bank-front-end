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
  status: false
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    signIn: (state, action) => {
      state.token = action.payload.token;
      state.status = true;
      state.error = false;
    },
    showError: (state, action) => {
      state.error = true;
      state.errorMessage = action.payload.errorMessage;
    }
  }
});

//export des mes actions
export const { signIn, showError } = userSlice.actions;
export default userSlice.reducer;
