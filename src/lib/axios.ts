import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://lavishverse-us.backendless.app/api",
});
