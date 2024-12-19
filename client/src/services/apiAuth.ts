import axiosInstance from "../utils/axiosConfig";
import { User, UserLogin } from "../interfaces/User";
import { handleApiError } from "../utils/handleApiError";

const AUTH_API: string = "auth";

export const loginUser = async (payload: UserLogin): Promise<User> => {
  try {
    const response = await axiosInstance.post(`${AUTH_API}/login`, payload);
    return response.data; // `response.data` phải có kiểu `User`
  } catch (error: any) {
    throw new Error(handleApiError(error));
  }
};
