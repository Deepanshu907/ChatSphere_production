import axios from "axios";

const BASE_URL ="https://chatsphere-production-backend.onrender.com";

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true, // send cookies with the request
});
