import { getToken, logout } from "@shared/auth";
import axios from "axios";

export const openApi = axios.create({
  baseURL: import.meta.env.VITE_API,
});

export const privateApi = axios.create({
  baseURL: import.meta.env.VITE_API,
});

privateApi.defaults.headers.common["Content-Type"] = "application/json";
privateApi.defaults.headers.common["Access-Control-Allow-Origin"] = "*";

privateApi.interceptors.request.use(
  (config) => {
    const token = getToken();

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

privateApi.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response?.status === 401) {
      logout();
    }
    return Promise.reject(error);
  },
);
