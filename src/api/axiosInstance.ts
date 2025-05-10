import axios from "axios";
import { error } from "console";
import { config } from "process";

export const axiosInstance = axios.create({
  baseURL: "https://localhost:7185/api",
  timeout: 1000,
});

axiosInstance.interceptors.request.use(
  (config) => {
    const bearerToken = localStorage.getItem("loginData") || "";
    if (bearerToken) {
      config.headers.Authorization = `Bearer ${bearerToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
