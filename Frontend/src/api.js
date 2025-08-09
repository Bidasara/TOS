import axios from "axios";
import { getAccessToken, setAccessToken,triggerLogout } from "./authToken";

const api = axios.create({
  baseURL: "/api/v1",
  withCredentials: true,
});

// Request interceptor: attach access token
api.interceptors.request.use(
  (config) => {
    const token = getAccessToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor: handle 401/403 and refresh token
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    if (
      (error.response?.status === 401 || error.response?.status === 403) &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;
      try {
        // Attempt to refresh token
        const res = await axios.post("/api/v1/auth/refresh-token", {}, { withCredentials: true });
        setAccessToken(res.data.data.accessToken);
        originalRequest.headers.Authorization = `Bearer ${res.data.data.accessToken}`;
        return api(originalRequest); // Retry original request
      } catch (refreshError) {
        const refreshErrorStatus = refreshError.response?.status;
        console.log(refreshError)
        if( refreshErrorStatus === 401 || refreshErrorStatus === 403) {
          console.error("Refresh token failed, logging out user...");
          triggerLogout();
        } else {
          console.error("Error refreshing token:", refreshError);
        }
        return Promise.reject(refreshError);
      }
    }
    return Promise.reject(error);
  }
);

export default api; 