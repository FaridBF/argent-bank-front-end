import userStore from '../store/userStore';
import { showError, signUp } from '../slices/userSlice';

const signUpMiddleware = (formDataSignUp) => {
  return async (dispatch) => {
    try {
      const data = await userStore.signUpUser(formDataSignUp);
      const status = data.status;
      if (status === 200) {
        console.log('status ok', status);
        const tokenObject = data.body;
        dispatch(signUp(tokenObject));
        // await loadProfil(dispatch, token);
      }
    } catch (error) {
      const status = error.response.status;
      if (status === 400) {
        console.log('erreur status', status);
        dispatch(showError(error.response.data.message));
      } else {
        throw new Error(error.message);
      }
    }
  };
};

export default signUpMiddleware;
