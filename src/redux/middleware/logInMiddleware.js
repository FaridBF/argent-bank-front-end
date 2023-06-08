import userStore from '../store/userStore';

import { signIn, showError } from '../slices/userSlice';
// import userProfileMiddleware from './userProfileMiddleware';

const logInMiddleware = (formDataSignIn) => {
  return async (dispatch) => {
    try {
      const data = await userStore.signInUser(formDataSignIn);
      const status = data.status;
      if (status === 200) {
        const tokenObject = data.body;
        // console.log('tokenObject.token', tokenObject.token);
        dispatch(signIn(tokenObject));
        // await userProfileMiddleware(dispatch, tokenObject.token);
      }
    } catch (error) {
      const status = error.response.status;
      if (status === 400) {
        dispatch(showError(error.response.data.message));
      } else {
        throw new Error(error.message);
      }
    }
  };
};

export default logInMiddleware;
