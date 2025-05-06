import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://localhost:7185/api",
  timeout: 1000,
});
