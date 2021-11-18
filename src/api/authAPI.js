import * as axios from 'axios';

// const instance = axios.create({
//    baseURL: '/api/auth/',
// }); 


export const authAPI = {
   register(userData) {
      return axios.post(`/api/auth/register`, userData);
   },

   login(userData) {
      return axios.post(`/api/auth/login`, userData);
   },
};