//Api service
import axios from 'axios';

export const signUpUser = async (formDataSignUp) => {
  const response = await axios.post(
    `http://localhost:3001/api/v1/user/signup`,
    formDataSignUp
  );
  return await response.data;
};

export const signInUser = async (formDataSignIn) => {
  const response = await axios.post(
    `http://localhost:3001/api/v1/user/login`,
    formDataSignIn
  );
  return await response.data;
};

export const getUserProfile = async (token) => {
  const axiosInstance = axios.create({
    baseURL: `http://localhost:3001/api/v1`,
    headers: { Authorization: `Bearer ${token}` }
  });
  const response = await axiosInstance.post(`/user/profile`);
  return response.data;
};

export const editUserProfile = async (token, { firstName, lastName }) => {
  const axiosInstance = axios.create({
    baseURL: `http://localhost:3001/api/v1`,
    headers: { Authorization: `Bearer ${token}` }
  });
  const response = await axiosInstance.put(`/user/profile`, {
    firstName,
    lastName
  });
  return response.data;
};

export default {
  signInUser,
  signUpUser,
  getUserProfile,
  editUserProfile
};
