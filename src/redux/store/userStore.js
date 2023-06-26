/**
 * User API service for authentication and user profile management.
 * @module apiService
 */

import axios from 'axios';

/**
 * Sign up a user.
 *
 * @async
 * @param {Object} formDataSignUp - The sign up form data.
 * @returns {Promise<Object>} The response data containing the user token.
 */
export const signUpUser = async (formDataSignUp) => {
  const response = await axios.post(
    `http://localhost:3001/api/v1/user/signup`,
    formDataSignUp
  );
  return response.data;
};

/**
 * Log in a user.
 *
 * @async
 * @param {Object} formDataSignIn - The sign in form data.
 * @returns {Promise<Object>} The response data containing the user token.
 */
export const signInUser = async (formDataSignIn) => {
  const response = await axios.post(
    `http://localhost:3001/api/v1/user/login`,
    formDataSignIn
  );
  return response.data;
};

/**
 * Get the user profile.
 *
 * @async
 * @param {string} token - The user token for authentication.
 * @returns {Promise<Object>} The response data containing the user profile.
 */
export const getUserProfile = async (token) => {
  const axiosInstance = axios.create({
    baseURL: `http://localhost:3001/api/v1`,
    headers: { Authorization: `Bearer ${token}` }
  });
  const response = await axiosInstance.post(`/user/profile`);
  return response.data;
};

/**
 * Edit the user profile.
 *
 * @async
 * @param {string} token - The user token for authentication.
 * @param {Object} updatedProfile - The updated profile data (firstName, lastName).
 * @returns {Promise<Object>} The response data containing the updated user profile.
 */
export const editUserProfile = async (token, updatedProfile) => {
  const axiosInstance = axios.create({
    baseURL: `http://localhost:3001/api/v1`,
    headers: { Authorization: `Bearer ${token}` }
  });
  const response = await axiosInstance.put(`/user/profile`, updatedProfile);
  return response.data;
};

export default {
  signInUser,
  signUpUser,
  getUserProfile,
  editUserProfile
};
