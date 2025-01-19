// src/axiosConfig.ts
import axios, { AxiosInstance } from "axios";

// Cấu hình cho API 1
const api1Instance: AxiosInstance = axios.create({
  baseURL: "https://server-watchhub.onrender.com/api/v1", // URL của API 1
  timeout: 10000, // Thời gian chờ request (ms)
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

// Cấu hình cho API 2 (ví dụ: một API khác)
const api2Instance: AxiosInstance = axios.create({
  baseURL: "https://phimapi.com/", // URL của API 2
  timeout: 10000, // Thời gian chờ request (ms)
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

// Thêm interceptor cho API 1
api1Instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api1Instance.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
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

// Thêm interceptor cho API 2
api2Instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api2Instance.interceptors.response.use(
  (response) => {
    // Kiểm tra xem response.data có tồn tại và có đúng kiểu dữ liệu không
    if (
      !response.data ||
      typeof response.data !== "object" ||
      response.data === null
    ) {
      return Promise.reject(new Error("Invalid response data")); // Hoặc trả về một giá trị mặc định
    }

    const modifiedData = response.data; // Hoặc một biến đổi nào đó (nếu có)

    return modifiedData;
  },
  (error) => {
    console.error("Response error:", error);
    return Promise.reject(error);
  }
);

// Export các instance để sử dụng trong các module khác
export { api1Instance, api2Instance };
