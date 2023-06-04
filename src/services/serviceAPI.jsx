//Api service
import axios from 'axios';

const BASE_URL = 'http://localhost:3001/api/v1';

async function signup() {
  // const data = {
  //   email: 'billy@gmail.com',
  //   password: 'billy51',
  //   firstName: 'billy',
  //   lastName: 'joel'
  // };
  const newDataSignUp = await axios.post(`${BASE_URL}/user/signup`);
  console.log('newDataSignUp', newDataSignUp);
}

function login(data) {
  const newDataLogin = axios
    .post(`${BASE_URL}/user/login`, data)
    .then((response) => {
      console.log('reponse', response);
      const token = response.data.body.token;
      console.log('token', token);
      console.log('login OK');
    })
    .catch((error) => {
      console.log('login KO');
      const codeError = error.response?.data.status;

      console.log('codeError', codeError);
      if (codeError === 400) {
        return alert('Les champs sont invalides');
      } else if (codeError === 500) {
        return alert('Erreur interne du serveur');
      } else {
        return alert('Une erreur est survenue');
      }
    });
  console.log('newDataLogin', newDataLogin);

  return newDataLogin;
}

// async function profile() {
//   const data = {
//     token:
//       'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0M2MwYTg2N2E2OGI5MWNkOGJiZDQwMiIsImlhdCI6MTY4MTcyMDY2MCwiZXhwIjoxNjgxODA3MDYwfQ.V9tIXeEGYO_FTln_Jy8o94b7HihIvOUVxIOYxb0G1G4'
//   };
//   const newDataProfile = axios.post(`${BASE_URL}/user/profile`, data);
//   console.log('newDataProfile', newDataProfile);
//   return newDataProfile;
// }

// async function modifyProfile() {
//   const data = {
//     email: 'farid@gmail.com',
//     password: 'farid51'
//   };
//   const newDataModifyProfile = axios.put(`${BASE_URL}/user/profile`, data);
//   console.log('newDataModifyProfile', newDataModifyProfile);
//   return newDataModifyProfile;
// }

export default {
  signup,
  login
  // profile,
  // modifyProfile
};
