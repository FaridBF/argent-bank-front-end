import userStore from '../store/userStore';

import { showError, getProfile } from '../slices/userSlice';

/**
 * Middleware function for fetching user profile.
 * Calls the API to get the user profile using the provided token.
 * Dispatches actions based on the API response.
 * @param {string} token - User token
 * @returns {Function} Middleware function
 */
const userProfileMiddleware = (token) => {
  return async (dispatch) => {
    try {
      const data = await userStore.getUserProfile(token);
      const status = data.status;
      if (status === 200) {
        const profil = { ...data.body };
        dispatch(getProfile(profil));
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

export default userProfileMiddleware;
