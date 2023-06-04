import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  /* état initial */
  msg: '',
  user: '',
  token: '',
  loading: false,
  error: ''
};

export const signUpUser = createAsyncThunk(
  'signup',
  async ({ formDataSignUp }) => {
    try {
      const response = await axios.post(
        `http://localhost:3001/api/v1/user/signup`,
        formDataSignUp
      );
      console.log('response-signup', response);
      return await response.json();
    } catch (error) {
      return error.message;
    }
  }
);

export const signInUser = createAsyncThunk(
  'signin',
  async ({ formDataSignIn }) => {
    try {
      const response = await axios.post(
        `http://localhost:3001/api/v1/user/login`,
        formDataSignIn
      );
      console.log('response-signin', response);
      const token = response.data.body.token;
      console.log('token', token);
      return await response.json();
    } catch (error) {
      return error.message;
    }
  }
);

const authSlice = createSlice(
  {
    name: 'auth',
    initialState,
    reducers: {
      // addToken: (state, action) => {
      //   state.token = localStorage.getItem('token');
      // },
      // addUser: (state, action) => {
      //   state.user = localStorage.getItem('user');
      // },
      // logout: (state, action) => {
      //   state.token = null;
      //   localStorage.clear();
    }
  }
  // extraReducers: {
  //   [signInUser.pending]: (state, action) => {
  //     state.loading = true;
  //   },
  //   [signInUser.fulfilled]: (
  //     state,
  //     { payload: { error, msg, user, token } }
  //   ) => {
  //     state.loading = false;
  //     if (error) {
  //       state.error = error;
  //     } else {
  //       state.msg = msg;
  //       state.token = token;
  //       state.user = user;

  //       localStorage.setItem('msg', msg);
  //       localStorage.setItem('user', JSON.stringify(user));
  //       localStorage.setItem('token', token);
  //     }
  //   }
  // [signInUser.rejected]: (state, action) => {
  //   state.loading = true;
  // },
  // //SignUp
  // [signUpUser.pending]: (state, action) => {
  //   state.loading = true;
  // },
  // [signUpUser.fulfilled]: (state, { payload: { error, msg } }) => {
  //   state.loading = false;
  //   if (error) {
  //     state.error = error;
  //   } else {
  //     state.msg = msg;
  //   }
  // },
  // [signUpUser.rejected]: (state, action) => {
  //   state.loading = true;
  // }
  // }
  // }
);

//export des mes actions
export const { addToken, logout, addUser } = authSlice;
export default authSlice.reducer;

// {
//   header: {
//     'Content-Type': 'application/json',
//     Authorization: 'Bearer' + token
//   }
// }
