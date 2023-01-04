import axios, { AxiosRequestConfig } from "axios";

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

instance.interceptors.request.use((config: AxiosRequestConfig) => {
  const user = localStorage.getItem("user");
  config.headers = config.headers ?? {};
  if (user) {
    config.headers["Authorization"] = `Bearer ${JSON.parse(user).token}`;
  }
  return config;
});

export { instance as httpClient };
