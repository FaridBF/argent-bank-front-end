import userStore from '../store/userStore';

import { signIn, showError } from '../slices/userSlice';

/**
 * Middleware function for user login.
 * Calls the API to sign in the user using the provided form data.
 * Dispatches actions based on the API response.
 * @param {Object} formDataSignIn - Form data for user login
 * @returns {Function} Middleware function
 */
const logInMiddleware = (formDataSignIn) => {
  return async (dispatch) => {
    try {
      const data = await userStore.signInUser(formDataSignIn);
      const status = data.status;
      if (status === 200) {
        const tokenObject = data.body;
        dispatch(signIn(tokenObject));
        alert('Connexion réussie');
      }
    } catch (error) {
      const status = error.response.status;
      if (status === 400) {
        dispatch(showError(error.response.data.message));
        alert("L'identifiant ou mot de passe n'est pas correct");
      } else {
        throw new Error(error.message);
      }
    }
  };
};

export default logInMiddleware;
