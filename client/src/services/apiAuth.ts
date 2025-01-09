import { User, UserLogin, UserRegister } from "../interfaces/User";
import { handleApiError } from "../utils/handleApiError";
import { ApiResponse } from "../interfaces/ApiResponse";
import { api1Instance } from "../utils/axiosConfig";

const AUTH_API: string = "auth";

export const loginUser = async (payload: UserLogin): Promise<User> => {
  try {
    const response = await api1Instance.post(`${AUTH_API}/login`, payload);
    return response.data; // `response.data` phải có kiểu `User`
  } catch (error: any) {
    throw new Error(handleApiError(error));
  }
};
export const registerUser = async (
  payload: UserRegister
): Promise<ApiResponse> => {
  try {
    const response = await api1Instance.post(`${AUTH_API}/register`, payload);

    return response.data;
  } catch (error: any) {
    throw new Error(handleApiError(error));
  }
};
