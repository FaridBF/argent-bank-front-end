import userStore from '../store/userStore';
import { showError, getProfile } from '../slices/userSlice';

const userProfileMiddleware = (token) => {
  return async (dispatch) => {
    try {
      const data = await userStore.getProfile(token);
      const status = data.status;
      if (status === 200) {
        console.log('status  profile', status);
        const profil = { ...data.body };
        dispatch(getProfile(profil));
        // await loadProfil(dispatch, token);
      }
    } catch (error) {
      const status = error.response.status;
      if (status === 400) {
        // console.log('erreur status', status);
        dispatch(showError(error.response.data.message));
      } else {
        throw new Error(error.message);
      }
    }
  };
};

export default userProfileMiddleware;
