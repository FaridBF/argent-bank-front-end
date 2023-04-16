//Api service
import axios from 'axios';

const BASE_URL = 'http://localhost:3001';

/**
 * Get user informations
 * @param {number} id user id
 * @returns {Promise<Object>} data: informations of the user
 */
async function getInformations(id) {
  await axios.get(`${BASE_URL}/${id}`).then((response) => response.data);
  console.log('response', response);
}

export default {
  getInformations
};
