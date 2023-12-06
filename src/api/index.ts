import axios from "axios";

const api = axios.create();

api.interceptors.request.use(
  (config) => {
    // 在发送请求之前做一些事情
    return config;
  },
  (error) => {
    // 在请求失败时做一些事情
    return Promise.reject(error);
  },
);

api.interceptors.response.use(
  (response) => {
    // 在收到响应之后做一些事情
    console.log('response', response);
    return response.data;
  },
  (error) => {
    // 在响应失败时做一些事情
    return Promise.reject(error);
  },
);

export default api;