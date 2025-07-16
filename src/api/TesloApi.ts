import axios from 'axios';
import { config } from 'process';

const tesloApi = axios.create({
  baseURL: import.meta.env.VITE_TESLO_API_URL,
});
tesloApi.interceptors.request.use((config) => {
  const token = localStorage.getItem('toke');
  if (token) {
    config.headers.Authorization = 'Bearer ${token}';
  }
  return config;
});
export { tesloApi };
