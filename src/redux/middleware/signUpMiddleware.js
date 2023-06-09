import userStore from '../store/userStore';

import { showError, signUp } from '../slices/userSlice';
import { redirect } from 'react-router-dom';

/**
 * Middleware function for user sign up.
 * Calls the API to sign up the user using the provided form data.
 * Dispatches actions based on the API response.
 * @param {Object} formDataSignUp - Form data for user sign up
 * @returns {Function} Middleware function
 */
const signUpMiddleware = (formDataSignUp) => {
  return async (dispatch) => {
    try {
      const data = await userStore.signUpUser(formDataSignUp);
      const status = data.status;
      if (status === 200) {
        const tokenObject = data.body;
        dispatch(signUp(tokenObject));
        alert('Inscription réussie');
      }
    } catch (error) {
      const status = error.response.status;
      if (status === 400) {
        dispatch(showError(error.response.data.message));
        alert("L'email est déjà utilisé");
      } else {
        throw new Error(error.message);
      }
    }
  };
};

export default signUpMiddleware;
