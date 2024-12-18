// src/axiosConfig.ts
import axios, { AxiosInstance } from "axios";

const axiosInstance: AxiosInstance = axios.create({
  baseURL: "http://localhost:9000/api/v1",
  timeout: 10000, // Thời gian chờ request (ms)
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

// Thêm interceptor để xử lý request hoặc response
axiosInstance.interceptors.request.use(
  (config) => {
    // Thêm token vào header nếu cần
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    // Xử lý lỗi khi gửi request
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    // Xử lý thành công
    return response.data;
  },
  (error) => {
    // Xử lý lỗi từ server
    if (error.response) {
      console.error("Error Response:", error.response);
    } else if (error.request) {
      console.error("Error Request:", error.request);
    } else {
      console.error("Error Message:", error.message);
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
