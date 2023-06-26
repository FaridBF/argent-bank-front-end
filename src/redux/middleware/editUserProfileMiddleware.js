import userStore from '../store/userStore';

import { showError, editProfile } from '../slices/userSlice';

/**
 * Middleware function for updating user profile.
 * Calls the API to update the user profile using the provided token and form data.
 * Dispatches actions based on the API response.
 * @param {string} token - User token
 * @param {Object} formDatas - Form data for updating the user profile
 * @returns {Function} Middleware function
 */
const userProfileMiddleware = (token, formDatas) => {
  return async (dispatch) => {
    try {
      const data = await userStore.editUserProfile(token, formDatas);
      const status = data.status;
      if (status === 200) {
        dispatch(editProfile(formDatas));
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
