import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  timeout: 10000,
});

api.interceptors.request.use(
  (config) => {
    const method = (config.method || 'GET').toUpperCase();
    console.log(`[REQ] ${method} ${config.baseURL}${config.url}`);
    return config;
  },
  (error) => {
    console.log('[REQ ERROR]', error.message);
    return Promise.reject(error);
  },
);

api.interceptors.response.use(
  (res) => {
    console.log(`[RES] ${res.status} ${res.config.url}`);
    return res;
  },
  (error) => {
    if (error.response) {
      console.log(`[RES ERROR] ${error.response.status} ${error.config?.url}`);
    } else {
      console.log('[RES ERROR]', error.message);
    }
    return Promise.reject(error);
  },
);

export default api;
