//Api service
import axios from 'axios';

export const signUpUser = async ({ formDataSignUp }) => {
  const response = await axios.post(
    `http://localhost:3001/api/v1/user/signup`,
    formDataSignUp
  );
  console.log('response-signup', response);
  return await response.data;
};

export const signInUser = async (formDataSignIn) => {
  console.log('formDataSignIn', formDataSignIn);
  const response = await axios.post(
    `http://localhost:3001/api/v1/user/login`,
    formDataSignIn
  );
  console.log('response-signin', response);
  return await response.data;
};

export default {
  signInUser,
  signUpUser
};
