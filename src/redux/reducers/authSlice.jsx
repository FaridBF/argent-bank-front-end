import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    /* état initial */
    msg: '',
    user: '',
    token: '',
    loading: false,
    error: ''
  },
  reducers: {
    login(state, action) {
      // modifier l'état pour indiquer que l'utilisateur est connecté
    },
    logout(state, action) {
      // modifier l'état pour indiquer que l'utilisateur est déconnecté
    }
  }
});

export const { login, logout } = authSlice;
export default authSlice.reducer;
