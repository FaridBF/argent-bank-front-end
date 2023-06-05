//Api service
import axios from 'axios';

export const signUpUser = async (formDataSignUp) => {
  console.log('formDataSignUp', formDataSignUp);

  const response = await axios.post(
    `http://localhost:3001/api/v1/user/signup`,
    formDataSignUp
  );
  console.log('response-signup', response);
  return await response.data;
};

export const signInUser = async (formDataSignIn) => {
  const response = await axios.post(
    `http://localhost:3001/api/v1/user/login`,
    formDataSignIn
  );
  return await response.data;
};

export default {
  signInUser,
  signUpUser
};
