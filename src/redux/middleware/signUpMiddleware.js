import userStore from '../store/userStore';
import { showError, signUp } from '../slices/userSlice';

const signUpMiddleware = (formDataSignUp) => {
  return async (dispatch) => {
    try {
      const data = await userStore.signUpUser(formDataSignUp);
      const status = data.status;
      if (status === 200) {
        const tokenObject = data.body;
        dispatch(signUp(tokenObject));
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

export default signUpMiddleware;
