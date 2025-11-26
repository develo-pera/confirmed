import axios from "axios";
import { deleteSession, getSession, refreshToken, refreshTokenAvailable } from "./session";

const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

apiClient.interceptors.request.use(async (config) => {
  const token = await getSession();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

apiClient.interceptors.response.use(
  async (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;

    // Prevent infinite retry loop
    if (originalRequest._retry) {
      await deleteSession();
      return Promise.reject(error);
    }

    if (error.response?.status === 401) {
      originalRequest._retry = true;

      const newToken = await refreshToken();

      if (newToken) {
        // Update the original request with new token
        originalRequest.headers.Authorization = `Bearer ${newToken}`;
        // Retry the original request
        return apiClient(originalRequest);
      } else {
        // Refresh failed - delete session and reject
        await deleteSession();
        return Promise.reject(error);
      }
    }

    throw error;
  }
);

export default apiClient; 