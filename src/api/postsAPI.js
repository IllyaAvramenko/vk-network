import * as axios from 'axios';
// import { Instance } from './instance';

// const instance = Instance('/api/posts/');

// const instanse = axios.create({
//    baseURL: '/api/posts/',
// }); 

export const postsAPI = {
   getAllPosts() {
      return axios.get('/api/posts/');
   },

   removePost(postId) {
      return axios.delete(`/api/posts/${postId}`);
   },

   createLike(postId) {
      return axios.post(`/api/posts/${postId}/likes`);
   },

   removeLike(postId, likeId) {
      return axios.delete(`/api/posts/${postId}/likes/${likeId}`);
   },

   createComment(postId, comment) {
      return axios.post(`/api/posts/${postId}/comments`, comment);
   },

   removeComment(postId, commentId) {
      return axios.delete(`/api/posts/${postId}/comments/${commentId}`);
   },
};